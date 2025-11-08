// app/services/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import {
  Code2,
  Smartphone,
  Bot,
  Cloud,
  Settings,
  Shield,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "product-development": Code2,
  "automation-ai": Bot,
  "cloud-devops": Cloud,
  "business-systems": Settings,
  "security-compliance": Shield,
  "consulting-support": Briefcase,
};

export const metadata = {
  title: "Services | Avisul",
  description:
    "End-to-end software development, AI automation, cloud, and business systems.",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  const grouped = services.reduce(
    (acc, service) => {
      const group = service.group || "uncategorized";
      if (!acc[group]) acc[group] = [];
      acc[group].push(service);
      return acc;
    },
    {} as Record<string, typeof services>,
  );

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end software development and cloud solutions
          </p>
        </div>

        {/* Grouped Services */}
        {Object.entries(grouped).map(([groupKey, items]) => {
          const Icon = iconMap[groupKey] || Code2;
          const groupTitle = groupKey
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

          return (
            <section key={groupKey} className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Icon className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-bold">{groupTitle}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="group-hover:text-indigo-600 transition">
                            {service.title}
                          </CardTitle>
                          <Button variant="ghost" size="icon">
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </div>
                        {service.description && (
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                        )}
                      </CardHeader>
                      {service.excerpt && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {service.excerpt}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
