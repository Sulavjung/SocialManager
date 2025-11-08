import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code,
  Code2,
  Container,
  Database,
  DollarSign,
  FileCode,
  FileText,
  GitBranch,
  GraduationCap,
  Layout,
  Lock,
  MessageSquare,
  Palette,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <section className="py-24 px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="m-2">
            <Badge variant={"outline"} className="bg-blue-100 text-blue-800">
              Websites
            </Badge>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Badge>AI automation</Badge>
            <Badge variant={"secondary"}>Much More</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Transforming Ideas into Scalable Digital Systems
          </h1>
          <p className="text-xl text-muted-foreground">
            We build modern web & mobile apps, AI automation, and secure cloud
            infrastructure — tailored for enterprises, startups and small
            businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase.git">
                <Github className="mr-1 size-5 fill-white" />
                GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase/blob/main/README.md">
                Get Started
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== 2. SERVICES ==================== */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end software development and cloud solutions
            </p>
          </div>

          <div className="grid  gap-8">
            {/* Product Development */}
            <Card>
              <CardHeader>
                <div>
                  <Code2 className="w-10 h-10 text-indigo-600 mb-3" />
                </div>
                <CardTitle>Product Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/web-apps"
                  className="block p-3 rounded-lg hover:bg-indigo-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">Web App Development</p>
                      <p className="text-sm text-muted-foreground">
                        Modern scalable web applications using React/Next.js.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/mobile-apps"
                  className="block p-3 rounded-lg hover:bg-indigo-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">Mobile App Development</p>
                      <p className="text-sm text-muted-foreground">
                        Cross-platform iOS & Android apps using React Native.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/api-backend"
                  className="block p-3 rounded-lg hover:bg-indigo-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">API & Backend Systems</p>
                      <p className="text-sm text-muted-foreground">
                        REST & GraphQL APIs, secure backend architecture.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/ui-ux"
                  className="block p-3 rounded-lg hover:bg-indigo-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">UI/UX Design</p>
                      <p className="text-sm text-muted-foreground">
                        User-centered design systems & interactive prototypes.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/ecommerce"
                  className="block p-3 rounded-lg hover:bg-indigo-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium">E-Commerce Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Online stores, product systems & payment integration.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Automation & AI */}
            <Card>
              <CardHeader>
                <Bot className="w-10 h-10 text-teal-600 mb-3" />
                <CardTitle>Automation & AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/workflow-automation"
                  className="block p-3 rounded-lg hover:bg-teal-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Workflow className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium">Workflow Automation</p>
                      <p className="text-sm text-muted-foreground">
                        Automating repetitive business workflows & operations.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/ai-integrations"
                  className="block p-3 rounded-lg hover:bg-teal-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium">AI Integrations & Agents</p>
                      <p className="text-sm text-muted-foreground">
                        GPT-powered systems & business AI copilots.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/rpa"
                  className="block p-3 rounded-lg hover:bg-teal-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium">RPA & Bots</p>
                      <p className="text-sm text-muted-foreground">
                        Automated bots for tasks, scraping & data handling.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/chatbots"
                  className="block p-3 rounded-lg hover:bg-teal-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium">Customer Chatbots</p>
                      <p className="text-sm text-muted-foreground">
                        AI customer support & lead-generation chatbots.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/data-automation"
                  className="block p-3 rounded-lg hover:bg-teal-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="font-medium">Web Scraping & Data</p>
                      <p className="text-sm text-muted-foreground">
                        Automated data collection & enrichment pipelines.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Cloud & DevOps */}
            <Card>
              <CardHeader>
                <Cloud className="w-10 h-10 text-sky-600 mb-3" />
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/cloud"
                  className="block p-3 rounded-lg hover:bg-sky-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-sky-600" />
                    <div>
                      <p className="font-medium">Cloud Infrastructure</p>
                      <p className="text-sm text-muted-foreground">
                        AWS, GCP & Azure setup, scaling & architecture.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/devops"
                  className="block p-3 rounded-lg hover:bg-sky-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-sky-600" />
                    <div>
                      <p className="font-medium">CI/CD & Automation</p>
                      <p className="text-sm text-muted-foreground">
                        Automated testing, builds & deployment pipelines.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/containerization"
                  className="block p-3 rounded-lg hover:bg-sky-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Container className="w-5 h-5 text-sky-600" />
                    <div>
                      <p className="font-medium">Containerization</p>
                      <p className="text-sm text-muted-foreground">
                        Docker & Kubernetes orchestration.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/serverless"
                  className="block p-3 rounded-lg hover:bg-sky-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-sky-600" />
                    <div>
                      <p className="font-medium">Serverless Systems</p>
                      <p className="text-sm text-muted-foreground">
                        Cloud functions & event-driven architecture.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Business Systems */}
            <Card>
              <CardHeader>
                <Settings className="w-10 h-10 text-emerald-600 mb-3" />
                <CardTitle>Business Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/erp"
                  className="block p-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">ERP & Inventory</p>
                      <p className="text-sm text-muted-foreground">
                        Inventory, POS, warehouse & barcode systems.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/crm"
                  className="block p-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">CRM Systems</p>
                      <p className="text-sm text-muted-foreground">
                        Lead management, customer pipelines & sales tools.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/payments"
                  className="block p-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Billing & Payments</p>
                      <p className="text-sm text-muted-foreground">
                        Stripe, subscriptions, invoices & financial automation.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/analytics"
                  className="block p-3 rounded-lg hover:bg-emerald-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Analytics & Reporting</p>
                      <p className="text-sm text-muted-foreground">
                        Dashboards, KPIs & business intelligence.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Security & Compliance */}
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-red-600 mb-3" />
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/security-audit"
                  className="block p-3 rounded-lg hover:bg-red-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Security Audits</p>
                      <p className="text-sm text-muted-foreground">
                        Penetration testing & code security reviews.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/auth"
                  className="block p-3 rounded-lg hover:bg-red-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Identity & Access</p>
                      <p className="text-sm text-muted-foreground">
                        User auth, MFA, role permissions & SSO.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/compliance"
                  className="block p-3 rounded-lg hover:bg-red-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Compliance Automation</p>
                      <p className="text-sm text-muted-foreground">
                        Process & data compliance automation systems.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Consulting & Support */}
            <Card>
              <CardHeader>
                <Briefcase className="w-10 h-10 text-amber-600 mb-3" />
                <CardTitle>Consulting & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="/services/architecture"
                  className="block p-3 rounded-lg hover:bg-amber-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Architecture Consulting</p>
                      <p className="text-sm text-muted-foreground">
                        System design, tech stack choices & planning.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/modernization"
                  className="block p-3 rounded-lg hover:bg-amber-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Legacy Modernization</p>
                      <p className="text-sm text-muted-foreground">
                        Upgrading old systems to modern technology.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/training"
                  className="block p-3 rounded-lg hover:bg-amber-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Training & Workshops</p>
                      <p className="text-sm text-muted-foreground">
                        AI, automation, cloud & engineering courses.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="/services/support"
                  className="block p-3 rounded-lg hover:bg-amber-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium">Maintenance & SLA</p>
                      <p className="text-sm text-muted-foreground">
                        Long-term system support & performance monitoring.
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 3. SOLUTIONS ==================== */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Industry-Tailored Solutions</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Digital transformation for every sector
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Enterprise Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ERP, CRM, HRMS, POS & enterprise workflows
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Digital health & EMR systems
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>FinTech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Banking, payment & finance platforms
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Commerce platforms and marketplace systems
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supply chain & delivery systems
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  E-learning and school management platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 4. PRODUCTS ==================== */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Software Products</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready-to-use platforms and tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Product Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore our software and tools
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCode className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Guides and developer docs
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Server className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  API documentation and usage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 5. HOW IT WORKS ==================== */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">How We Deliver</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              From idea to production in 4 steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                Requirements, goals, roadmap
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Prototype</h3>
              <p className="text-muted-foreground">
                Wireframes, UI/UX, feedback
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Build & Test</h3>
              <p className="text-muted-foreground">
                Development, QA, automation
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Cloud, monitoring, support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. WHY CHOOSE AVISUL ==================== */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why Companies Trust Us</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven expertise. Real results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>10+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise-grade systems since 2014
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>100% On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SLA-backed timelines</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Secure by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SOC 2, GDPR, HIPAA compliant
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From MVP to 10M users</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>AI-Powered Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduce ops cost by 70%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated engineering team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 7. TESTIMONIALS ==================== */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  “Avisul built our EMR in 3 months. Zero downtime in 2 years.”
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, MediFlow
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  “Their AI fraud detection saved us $2.1M last year.”
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">James Park</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, PaySwift
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  “Real-time tracking system scaled to 50K shipments/day.”
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ana Lopez</p>
                    <p className="text-sm text-muted-foreground">
                      Ops Director, LogiTrack
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 8. CASE STUDIES ==================== */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <CardTitle>HealthPlus</CardTitle>
                <Badge variant="secondary">Healthcare</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  40% faster patient onboarding
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <CardTitle>FinSecure</CardTitle>
                <Badge variant="secondary">FinTech</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">99.99% payment uptime</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <CardTitle>EduLearn</CardTitle>
                <Badge variant="secondary">Education</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">300K students on platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== 9. FAQ ==================== */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              Got questions? We’ve got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is your typical project timeline?
                </AccordionTrigger>
                <AccordionContent>
                  4–12 weeks for MVP, 3–6 months for full systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do you offer fixed-price contracts?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, for well-defined scopes. We also offer T&M for agile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Which cloud providers do you support?
                </AccordionTrigger>
                <AccordionContent>
                  AWS, GCP, Azure — certified architects on all.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can you modernize legacy systems?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We’ve migrated COBOL, .NET, and Java monoliths.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you provide post-launch support?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. SLA-based maintenance, monitoring, and upgrades.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Are your solutions AI-ready?
                </AccordionTrigger>
                <AccordionContent>
                  All backends support GPT, Llama, and custom ML models.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Do you handle compliance (GDPR, HIPAA)?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Automated compliance pipelines included.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Can I start with a prototype?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. We offer 2-week paid prototypes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ==================== 10. CTA BANNER ==================== */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let’s discuss your project. Free 30-min consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100"
            asChild
          >
            <a href="/contact">
              Book a Call <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Built with ♥ by{" "}
            <a
              href="https://codelabdavis.com"
              className="underline underline-offset-4"
            >
              CodeLab Davis
            </a>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase/blob/main/README.md"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              README Documentation
            </Link>
            <Link
              href="https://github.com/Codelab-Davis"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link
              href="https://nextjs.org"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Next.js
            </Link>
            <Link
              href="https://ui.shadcn.com"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Shadcn UI
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Github = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};
