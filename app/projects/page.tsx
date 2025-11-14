// app/projects/page.tsx
import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { posts: true } } },
  });

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description ?? undefined}
            postCount={p._count?.posts ?? 0}
          />
        ))}
      </div>
    </div>
  );
}
