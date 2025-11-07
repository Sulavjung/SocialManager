import { Icons } from "@/components/icons";

interface NavItem {
  title: string;
  description?: string;
  to?: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export const mainMenu: NavItemWithChildren[] = [
  {
    title: "Services",
    description: "Software development and cloud services",
    items: [
      {
        title: "Product Development",
        icon: "productDevelopment",
        items: [
          {
            title: "Web App Development",
            to: "/services/web-apps",
            icon: "productDevelopment",
            description:
              "Modern scalable web applications using React/Next.js.",
          },
          {
            title: "Mobile App Development",
            to: "/services/mobile-apps",
            icon: "mobileApp",
            description:
              "Cross-platform iOS & Android apps using React Native.",
          },
          {
            title: "API & Backend Systems",
            to: "/services/api-backend",
            icon: "apiBackend",
            description: "REST & GraphQL APIs, secure backend architecture.",
          },
          {
            title: "UI/UX Design",
            to: "/services/ui-ux",
            icon: "uiux",
            description:
              "User-centered design systems & interactive prototypes.",
          },
          {
            title: "E-Commerce Solutions",
            to: "/services/ecommerce",
            icon: "ecommerce",
            description:
              "Online stores, product systems & payment integration.",
          },
        ],
      },
      {
        title: "Automation & AI",

        items: [
          {
            title: "Workflow Automation",
            to: "/services/workflow-automation",

            description:
              "Automating repetitive business workflows & operations.",
          },
          {
            title: "AI Integrations & Agents",
            to: "/services/ai-integrations",

            description: "GPT-powered systems & business AI copilots.",
          },
          {
            title: "RPA & Bots",
            to: "/services/rpa",

            description: "Automated bots for tasks, scraping & data handling.",
          },
          {
            title: "Customer Chatbots",
            to: "/services/chatbots",

            description: "AI customer support & lead-generation chatbots.",
          },
          {
            title: "Web Scraping & Data",
            to: "/services/data-automation",

            description: "Automated data collection & enrichment pipelines.",
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        icon: "cloudInfra",
        items: [
          {
            title: "Cloud Infrastructure",
            to: "/services/cloud",
            icon: "cloudInfra",
            description: "AWS, GCP & Azure setup, scaling & architecture.",
          },
          {
            title: "CI/CD & Automation",
            to: "/services/devops",
            icon: "devOps",
            description: "Automated testing, builds & deployment pipelines.",
          },
          {
            title: "Containerization",
            to: "/services/containerization",
            icon: "devOps",
            description: "Docker & Kubernetes orchestration.",
          },
          {
            title: "Serverless Systems",
            to: "/services/serverless",
            icon: "serverless",
            description: "Cloud functions & event-driven architecture.",
          },
        ],
      },
      {
        title: "Business Systems",
        icon: "settings",
        items: [
          {
            title: "ERP & Inventory",
            to: "/services/erp",
            icon: "file",
            description: "Inventory, POS, warehouse & barcode systems.",
          },
          {
            title: "CRM Systems",
            to: "/services/crm",

            description: "Lead management, customer pipelines & sales tools.",
          },
          {
            title: "Billing & Payments",
            to: "/services/payments",

            description:
              "Stripe, subscriptions, invoices & financial automation.",
          },
          {
            title: "Analytics & Reporting",
            to: "/services/analytics",
            icon: "analytics",
            description: "Dashboards, KPIs & business intelligence.",
          },
        ],
      },
      {
        title: "Security & Compliance",
        icon: "security",
        items: [
          {
            title: "Security Audits",
            to: "/services/security-audit",
            icon: "security",
            description: "Penetration testing & code security reviews.",
          },
          {
            title: "Identity & Access",
            to: "/services/auth",
            icon: "security",
            description: "User auth, MFA, role permissions & SSO.",
          },
          {
            title: "Compliance Automation",
            to: "/services/compliance",
            icon: "security",
            description: "Process & data compliance automation systems.",
          },
        ],
      },
      {
        title: "Consulting & Support",
        icon: "consulting",
        items: [
          {
            title: "Architecture Consulting",
            to: "/services/architecture",
            icon: "consulting",
            description: "System design, tech stack choices & planning.",
          },
          {
            title: "Legacy Modernization",
            to: "/services/modernization",
            icon: "consulting",
            description: "Upgrading old systems to modern technology.",
          },
          {
            title: "Training & Workshops",
            to: "/services/training",
            icon: "consulting",
            description: "AI, automation, cloud & engineering courses.",
          },
          {
            title: "Maintenance & SLA",
            to: "/services/support",
            icon: "consulting",
            description: "Long-term system support & performance monitoring.",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    description: "Industry and enterprise digital solutions",
    items: [
      {
        title: "Enterprise Systems",
        to: "/solutions/enterprise",
        icon: "settings",
        description: "ERP, CRM, HRMS, POS & enterprise workflows",
      },
      {
        title: "Healthcare",
        to: "/solutions/healthcare",
        icon: "healthcare",
        description: "Digital health & EMR systems",
      },
      {
        title: "FinTech",
        to: "/solutions/fintech",
        icon: "fintech",
        description: "Banking, payment & finance platforms",
      },
      {
        title: "E-Commerce",
        to: "/solutions/ecommerce",
        icon: "ecommerce",
        description: "Commerce platforms and marketplace systems",
      },
      {
        title: "Logistics",
        to: "/solutions/logistics",
        icon: "logistics",
        description: "Supply chain & delivery systems",
      },
      {
        title: "Education",
        to: "/solutions/education",

        description: "E-learning and school management platforms",
      },
    ],
  },
  {
    title: "Products",
    description: "Our software products and platforms",
    items: [
      {
        title: "Product Suite",
        to: "/products",
        icon: "settings",
        description: "Explore our software and tools",
      },
      {
        title: "Documentation",
        to: "/products/docs",
        icon: "documentation",
        description: "Guides and developer docs",
      },
      {
        title: "API Reference",
        to: "/products/api",
        icon: "apiBackend",
        description: "API documentation and usage",
      },
    ],
  },
  {
    title: "Resources",
    description: "Learning & knowledge base",
    items: [
      {
        title: "Blog",
        to: "/blog",

        description: "Articles, insights, and technology news",
      },
      {
        title: "Case Studies",
        to: "/case-studies",

        description: "Client success and project stories",
      },
      {
        title: "E-Books & Guides",
        to: "/resources/guides",

        description: "Downloadable expert content",
      },
      {
        title: "Developer Docs",
        to: "/developers/docs",
        icon: "documentation",
        description: "Resources for developers",
      },
      {
        title: "Whitepapers",
        to: "/resources/whitepapers",

        description: "Research and industry insights",
      },
    ],
  },
  {
    title: "Pricing",
    to: "/pricing",

    description: "Service plans and pricing details",
  },
  {
    title: "About",
    description: "Learn about our company, values, and leadership",
    items: [
      {
        title: "Company",
        to: "/about/company",
        icon: "company",
        description: "Our story, timeline, and mission",
      },
      {
        title: "Leadership",
        to: "/about/leadership",

        description: "Meet the leadership team",
      },
      {
        title: "Culture",
        to: "/about/culture",

        description: "Learn about our company culture",
      },
      {
        title: "Security & Compliance",
        to: "/about/security",
        icon: "security",
        description: "Our policies, certifications, and compliance information",
      },
      {
        title: "Legal",
        to: "/about/legal",
        icon: "file",
        description: "Terms, privacy, and governance policies",
      },
    ],
  },
  {
    title: "Careers",
    to: "/careers",
    icon: "careers",
    description: "Join our team — explore open roles",
  },
  {
    title: "Contact",
    to: "/contact",

    description: "Contact us for support or consultation",
  },
];

export const sideMenu: NavItemWithChildren[] = [];
