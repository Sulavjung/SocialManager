// lib/services.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

import { MDXRemoteSerializeResult } from "next-mdx-remote";

const servicesDir = path.join(process.cwd(), "content/services");

export interface Service {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  group: string;
  content: string;
  mdxContent?: MDXRemoteSerializeResult;
  readingTime?: number;
  publishedAt?: string;
}

export async function getAllServices(): Promise<Service[]> {
  const files = fs.readdirSync(servicesDir).filter((f) => f.endsWith(".mdx"));

  const services = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const fullPath = path.join(servicesDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        excerpt: data.excerpt,
        group: data.group,
        content: contentHtml,
        readingTime: Math.ceil(stats.minutes),
        publishedAt: data.date,
      };
    }),
  );

  return services.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const fullPath = path.join(servicesDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      excerpt: data.excerpt,
      group: data.group,
      content: content,
      readingTime: Math.ceil(stats.minutes),
      publishedAt: data.date,
    };
  } catch {
    return null;
  }
}
