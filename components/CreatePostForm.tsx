// components/CreatePostForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadField } from "@/components/UploadField";
import { Plus } from "lucide-react";

interface CreatePostFormProps {
  projectId: string;
}

export function CreatePostForm({ projectId }: CreatePostFormProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // initialJson structure
  const initialJson = {
    titles: ["First Post", "Getting Started", "Welcome Guide"],
    descriptions: [
      "Intro to the project",
      "How to use this tool",
      "Tips and tricks",
    ],
    paragraph:
      "Start writing your article here...\n\nUse **Markdown** for formatting.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/projects/${projectId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          article: article || initialJson.paragraph,
          imageUrl,
          initialJson,
        }),
      });

      if (res.ok) {
        setOpen(false);
        setTitle("");
        setDescription("");
        setArticle("");
        setImageUrl("");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Choose from templates or write your own.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label>Image</Label>
            <UploadField onUpload={setImageUrl} />
            {imageUrl && (
              <div className="mt-2 relative h-32 w-full rounded-md overflow-hidden">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Title</Label>

            <Input
              placeholder="Title of the post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>

            <Input
              placeholder="Description of the post"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Article (Markdown)</Label>
            <Textarea
              placeholder={initialJson.paragraph}
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              rows={8}
              className="font-mono text-sm"
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={loading || !title}>
              {loading ? "Creating..." : "Create Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
