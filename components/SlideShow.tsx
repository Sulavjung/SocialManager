"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SlideshowApi = UseEmblaCarouselType[1];
type UseSlideshowParameters = Parameters<typeof useEmblaCarousel>;
type SlideshowOptions = UseSlideshowParameters[0];
type SlideshowPlugin = UseSlideshowParameters[1];

type SlideshowProps = {
  opts?: SlideshowOptions;
  plugins?: SlideshowPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: SlideshowApi) => void;
  /** Auto‑play interval in ms */
  autoPlayInterval?: number;
  /** Enable auto‑play */
  autoPlay?: boolean;
  /** Pause when the mouse hovers */
  pauseOnHover?: boolean;
  /** Show dots */
  showDots?: boolean;
  /** Show play/pause button */
  showPlayPause?: boolean;
  /** Infinite loop */
  loop?: boolean;
  align?: "start" | "center" | "end";
};

type SlideshowContextProps = {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  slideDirection: number;
  togglePlay: () => void;
  isPlaying: boolean;
} & SlideshowProps;

const SlideshowContext = React.createContext<SlideshowContextProps | null>(
  null,
);

function useSlideshow() {
  const ctx = React.useContext(SlideshowContext);
  if (!ctx) {
    throw new Error("useSlideshow must be used within a <Slideshow />");
  }
  return ctx;
}

/* -------------------------------------------------------------------------- */
/*                              Slideshow Root                               */
/* -------------------------------------------------------------------------- */
function Slideshow({
  orientation = "horizontal",
  opts,
  plugins,
  setApi,
  className,
  children,
  autoPlayInterval = 4000,
  autoPlay = true,
  pauseOnHover = true,
  showDots = true,
  showPlayPause = true,
  loop = true,
  align = "center",
  ...props
}: React.ComponentProps<"div"> & SlideshowProps) {
  const [emblaRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      align: align,
      loop,
    },
    plugins,
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [isHovered, setIsHovered] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: SlideshowApi) => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollPrev = React.useCallback(() => {
    setSlideDirection(-1);
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    setSlideDirection(1);
    api?.scrollNext();
  }, [api]);

  const togglePlay = React.useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  /* -------------------------- Auto‑play logic -------------------------- */
  React.useEffect(() => {
    if (!api || !isPlaying || isHovered) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else if (loop) {
        api.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, isPlaying, isHovered, autoPlayInterval, loop]);

  /* -------------------------- Embla events -------------------------- */
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  return (
    <SlideshowContext.Provider
      value={{
        emblaRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        slideDirection,
        togglePlay,
        isPlaying,
        autoPlayInterval,
        autoPlay,
        pauseOnHover,
        showDots,
        showPlayPause,
        loop,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="slideshow"
        data-slot="slideshow"
        {...props}
      >
        {children}
      </div>
    </SlideshowContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SlideshowContent                               */
/* -------------------------------------------------------------------------- */
function SlideshowContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { emblaRef, orientation } = useSlideshow();

  return (
    <div ref={emblaRef} className="" data-slot="slideshow-content">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

/**
 * SlideshowItem
 *
 * Use basis-1/2 for two items per slide,  or basis-full for one item per slide in classname.
 *
 * */
function SlideshowItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useSlideshow();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="slideshow-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full ",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                              SlideshowPrevious                               */
/* -------------------------------------------------------------------------- */
function SlideshowPrevious({
  className,
  variant = "secondary",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useSlideshow();

  return (
    <Button
      data-slot="slideshow-previous"
      variant={variant}
      size={size}
      className={cn(
        "z-10 rounded-full p-2 shadow-lg backdrop-blur-sm transition hover:scale-110",
        orientation === "horizontal"
          ? ""
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                SlideshowNext                                 */
/* -------------------------------------------------------------------------- */
function SlideshowNext({
  className,
  variant = "secondary",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useSlideshow();

  return (
    <Button
      data-slot="slideshow-next"
      variant={variant}
      size={size}
      className={cn(
        " z-10 rounded-full  p-2 shadow-lg backdrop-blur-sm transition hover:scale-110",
        orientation === "horizontal"
          ? ""
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SlideshowPlayPause                               */
/* -------------------------------------------------------------------------- */
function SlideshowPlayPause({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { isPlaying, togglePlay } = useSlideshow();

  return (
    <Button
      data-slot="slideshow-play-pause"
      variant={"secondary"}
      size={"icon"}
      onClick={togglePlay}
      className={cn(
        "rounded-full p-2 shadow-md backdrop-blur-sm transition hover:bg-white",
        className,
      )}
      aria-label={isPlaying ? "Pause" : "Play"}
      {...props}
    >
      {isPlaying ? (
        <Pause className="h-4 w-4" fill="full" />
      ) : (
        <Play className="h-4 w-4" fill="full" />
      )}
    </Button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SlideshowDots                                 */
/* -------------------------------------------------------------------------- */
function SlideshowDots({ className }: { className?: string }) {
  const { api, selectedIndex, showDots } = useSlideshow();

  if (!showDots || !api) return null;

  const count = api.scrollSnapList().length;

  return (
    <div
      data-slot="slideshow-dots"
      className={cn("flex items-center gap-2", className)}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => api.scrollTo(i)}
          className={cn(
            "h-2 rounded-full transition-all duration-300 shadow-md",
            i === selectedIndex
              ? "bg-white w-8"
              : "bg-white/50 w-2 hover:bg-white/80",
          )}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SlideshowControls                              */
/* -------------------------------------------------------------------------- */
function SlideshowControls({ className }: { className?: string }) {
  const { showPlayPause, showDots } = useSlideshow();

  if (!showPlayPause && !showDots) return null;

  return (
    <div
      data-slot="slideshow-controls"
      className={cn(
        "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 ",
        className,
      )}
    >
      {showDots && <SlideshowDots />}
      {showPlayPause && <SlideshowPlayPause />}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        SlideshowAnimatedContent                           */
/* -------------------------------------------------------------------------- */
type SlideshowAnimatedContentProps = {
  className?: string;
  children: React.ReactNode;
  /** Optional override for direction */
  direction?: "left" | "right" | "up" | "down";
  stagger?: number;
};

function SlideshowAnimatedContent({
  className,
  children,
  direction: overrideDirection,
  stagger = 100,
}: SlideshowAnimatedContentProps) {
  const { api, selectedIndex, slideDirection } = useSlideshow();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  // Sync with Embla
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const idx = api.selectedScrollSnap();
      setCurrentIndex(idx);
      setIsActive(true);
    };
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const isCurrent = selectedIndex === currentIndex;

  // Determine animation direction
  const direction =
    overrideDirection || (slideDirection > 0 ? "left" : "right");

  const variants = {
    enter: {
      opacity: 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      y: direction === "down" ? -100 : direction === "up" ? 100 : 0,
    },
    center: { opacity: 1, x: 0, y: 0 },
    exit: {
      opacity: 0,
      x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
      y: direction === "down" ? 100 : direction === "up" ? -100 : 0,
    },
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
      data-slot="slideshow-animated-content"
      className={cn("relative h-full w-full", className)}
    >
      <AnimatePresence mode="wait">
        {isCurrent && (
          <motion.div
            key={currentIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: stagger / 1000,
            }}
            className="h-full w-full"
          >
            {childArray.map((child, i) => (
              <motion.div
                key={i}
                variants={variants}
                transition={{
                  delay: i * (stagger / 1000),
                  duration: 0.5,
                }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           SlideshowNextAndPrevious on Bottom Left          */
/* -------------------------------------------------------------------------- */
function SlideShowNextAndPrevious({
  className,
  varient = "default",
}: {
  className?: string;
  varient?: "bottom-right-together" | "default";
}) {
  switch (varient) {
    case "bottom-right-together":
      return (
        <div
          data-slot="slideshow-Next-And-Previous"
          className={cn(
            "absolute bottom-0 right-0 translate-y-5/4 flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-1 py-1 ",
            className,
          )}
        >
          <SlideshowPrevious />
          <SlideshowNext />
        </div>
      );
    default:
      return (
        <div
          data-slot="slideshow-Next-And-Previous"
          className={cn("", className)}
        >
          <SlideshowPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
          <SlideshowNext className="absolute top-1/2 right-4 -translate-y-1/2" />
        </div>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */
export {
  type SlideshowApi,
  Slideshow,
  SlideshowContent,
  SlideshowItem,
  SlideshowPrevious,
  SlideshowNext,
  SlideshowPlayPause,
  SlideshowDots,
  SlideshowControls,
  SlideshowAnimatedContent,
  SlideShowNextAndPrevious,
};
