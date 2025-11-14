// components/UploadField.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadFieldProps {
  onUpload: (url: string) => void;
}

export function UploadField({ onUpload }: UploadFieldProps) {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onUpload(data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Input
        type="file"
        accept="image/*"
        onChange={handleFile}
        disabled={uploading}
      />
      {uploading && (
        <p className="text-sm text-muted-foreground mt-1">Uploading...</p>
      )}
    </div>
  );
}
