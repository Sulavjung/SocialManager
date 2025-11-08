"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainMenu } from "@/config/menu";
import { Logo } from "../logo";
import { ModeToggle } from "../mode-toggle";
import { ScrollArea } from "../ui/scroll-area";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "../icons";
import { PanelLeftIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string | undefined) =>
    path ? pathname === path : false;

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur ">
      <div className="container px-4 md:px-8 flex h-14 items-center justify-between mx-auto">
        {/* Logo */}
        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>

          {/* 🧭 Desktop Nav */}
          <NavigationMenu>
            <NavigationMenuList>
              {mainMenu.map((menu, i) =>
                menu.items ? (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuTrigger className="font-semibold">
                      {menu.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="p-4 supports-backdrop-blur:bg-background/60 bg-background/90 backdrop-blur">
                      <div className="flex flex-col space-y-2">
                        <ul className="grid gap-2 w-[724px]">
                          {menu.items.map((sub, idx) => (
                            <li key={idx}>
                              {/* If sub has children */}
                              {sub.items && sub.items.length > 0 ? (
                                <div className="mb-2">
                                  <p className="text-[11px] font-bold uppercase text-muted-foreground mb-1 tracking-wide">
                                    {sub.title}
                                  </p>

                                  <ul className="pl-2 grid grid-cols-3 gap-2 border-l border-muted/30">
                                    {sub.items.map((child, cIdx) => (
                                      <li key={cIdx}>
                                        <Link
                                          href={child.to ?? "#"}
                                          className={cn(
                                            "flex items-start gap-2 rounded-md px-2 py-1 hover:bg-muted transition",
                                            isActive(child.to) &&
                                              "bg-muted font-semibold",
                                          )}
                                        >
                                          <div className="w-5 h-5 flex items-center justify-center">
                                            {child.icon &&
                                              React.createElement(
                                                Icons[child.icon],
                                              )}
                                          </div>

                                          <div>
                                            <p className="text-sm font-medium">
                                              {child.title}
                                            </p>
                                            {child.description && (
                                              <p className="text-xs text-muted-foreground line-clamp-2">
                                                {child.description}
                                              </p>
                                            )}
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                // No child items — render normally
                                <Link
                                  href={sub.to ?? "#"}
                                  className={cn(
                                    "rounded-md p-2 hover:bg-muted transition block",
                                    isActive(sub.to) &&
                                      "bg-muted font-semibold",
                                  )}
                                >
                                  <p className="text-sm font-medium">
                                    {sub.title}
                                  </p>
                                  {sub.description && (
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                      {sub.description}
                                    </p>
                                  )}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={i}>
                    <Link
                      href={menu.to ?? "#"}
                      className={cn(
                        "text-sm font-semibold hover:text-primary",
                        isActive(menu.to) && "text-primary underline",
                      )}
                    >
                      <NavigationMenuLink>{menu.title}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 📱 Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 md:hidden">
              <PanelLeftIcon className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="pr-0 sm:max-w-xs p-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center space-x-2"
            >
              <Logo />
            </Link>

            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8 pl-2">
              <Accordion type="multiple" className="w-full">
                {mainMenu.map((menu, i) =>
                  menu.items ? (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="font-semibold text-sm">
                        {menu.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 border-l space-y-1">
                          {menu.items.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.to ?? "#"}
                              className={cn(
                                "block py-2 text-sm text-muted-foreground hover:text-primary",
                                isActive(sub.to) &&
                                  "text-primary font-semibold",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              <p className="font-medium">{sub.title}</p>
                              {sub.description && (
                                <p className="text-xs">{sub.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <Link
                      key={i}
                      href={menu.to ?? "#"}
                      className={cn(
                        "block py-2 text-sm font-medium hover:text-primary",
                        isActive(menu.to) && "text-primary font-semibold",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  ),
                )}
              </Accordion>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {useIsMobile() && (
          <Link href="/" className="flex md:hidden items-center gap-2 flex-1">
            <Logo />
          </Link>
        )}

        {/* Right Controls */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
