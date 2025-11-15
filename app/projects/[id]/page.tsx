// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { Pagination } from "@/components/Pagination";
import { CreatePostForm } from "@/components/CreatePostForm";
import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Search } from "lucide-react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string; search?: string }>;
}

export default async function ProjectPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // 1. Validate params.id
  if (!resolvedParams?.id) {
    notFound();
  }

  const page = parseInt(resolvedSearchParams.page || "1");
  const search = resolvedSearchParams.search || "";
  const limit = 10;

  // 2. Fetch project with validation
  const project = await prisma.project.findUnique({
    where: { id: resolvedParams.id },
    include: { posts: true },
  });

  // 3. 404 if project doesn't exist
  if (!project) {
    notFound();
  }

  // 4. Build search filter
  const where: any = { projectId: resolvedParams.id };
  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.post.count({ where }),
  ]);

  return (
    <div className="container mx-auto py-4 md:py-10 px-4 md:px-0">
      <Link href="/" className="flex items-center pb-2">
        <ChevronLeft className="mr-2" />
        Projects
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <CreatePostForm projectId={resolvedParams.id} />
      </div>

      <div className="mb-6">
        <form className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              name="search"
              placeholder="Search title or description..."
              className="pl-10"
              defaultValue={search}
            />
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description ?? undefined}
            imageUrl={post.imageUrl ?? undefined}
          />
        ))}
      </div>

      {/* <Pagination
        page={page}
        total={total}
        limit={limit}
        onPageChange={() => {}}
      /> */}
    </div>
  );
}
