"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButton({ imageUrl }: { imageUrl: string }) {
  return (
    <Button
      className="absolute bottom-4 right-4"
      size="sm"
      onClick={() => window.open(imageUrl, "_blank")}
    >
      <Download className="h-4 w-4 mr-2" />
      Download
    </Button>
  );
}
