// app/api/projects/[id]/posts/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  article: z.string(),
  imageUrl: z.string().optional(),
  initialJson: z.any(),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const paramsResolved = await params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 10;
  const search = searchParams.get("search") || "";

  const where: any = { projectId: paramsResolved.id };
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

  return NextResponse.json({ posts, total, page, limit });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const paramsResolved = await params;
  const body = await request.json();
  const parsed = postSchema.parse(body);

  const post = await prisma.post.create({
    data: {
      ...parsed,
      projectId: paramsResolved.id,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
