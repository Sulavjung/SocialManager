// app/posts/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { DownloadButton } from "@/components/DownloadButton";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id: id },
    include: { project: true },
  });

  if (!post) return <div>Post not found</div>;

  return (
    <article className="container mx-auto py-4 md:py-10 px-4 :px-0">
      <Link
        href={`/projects/${post.projectId}`}
        className="flex items-center pb-2"
      >
        <ChevronLeft className="mr-2" />
        {post.project.name}
      </Link>
      {post.imageUrl && (
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-contain"
          />
          <DownloadButton imageUrl={post.imageUrl} />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.createdAt && (
        <p className="text-sm text-muted-background mb-2">
          Published on {post.createdAt.toLocaleDateString()}
        </p>
      )}

      {post.description && (
        <p className="text-xl text-muted-foreground mb-8">{post.description}</p>
      )}

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.article}</ReactMarkdown>
      </div>
    </article>
  );
}
