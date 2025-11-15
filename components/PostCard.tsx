// components/PostCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export function PostCard({ id, title, description, imageUrl }: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      {imageUrl && (
        <div className="relative h-28 w-full">
          <img src={imageUrl} alt={title} className="object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle>
          <Link href={`/posts/${id}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{description || "No description"}</CardDescription>
      </CardHeader>
    </Card>
  );
}
