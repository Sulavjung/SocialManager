// components ProjectCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  name: string;
  description?: string;
  postCount: number;
}

export function ProjectCard({
  id,
  name,
  description,
  postCount,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description || "No description"}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{postCount} posts</p>
        <Button asChild size="sm">
          <Link href={`/projects/${id}`}>View Posts</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
