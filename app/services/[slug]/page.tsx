// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServices } from "@/lib/services";
import { MDXRemote } from "next-mdx-remote/rsc"; // ← correct import
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { mdxComponents } from "@/mdx-components";

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.title} | Avisul`,
    description: service.description || service.excerpt,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const { default: Post, frontmatter } = await import(
    `@/content/services/${slug}.mdx`
  );

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-2">
          <Link
            href="/services"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {frontmatter?.title || service.title}
          </h1>
          {(frontmatter?.description || service.description) && (
            <p className="text-xl text-muted-foreground mb-6">
              {frontmatter?.description || service.description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {(frontmatter?.readingTime || service.readingTime) && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />{" "}
                {frontmatter?.readingTime || service.readingTime} min read
              </div>
            )}
            {(frontmatter?.publishedAt || service.publishedAt) && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(
                  frontmatter?.publishedAt || service.publishedAt,
                ).toLocaleDateString()}
              </div>
            )}
          </div>
        </header>
        <MDXRemote source={service.content} components={mdxComponents} />

        {/* CTA */}
        <Card className="bg-indigo-50 border-indigo-200 p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">
            Let’s build your {service.title.toLowerCase()} solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export const dynamicParams = false;
