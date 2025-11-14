// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();
  await prisma.post.deleteMany();

  const project1 = await prisma.project.create({
    data: {
      name: "Tech Blog",
      description: "Articles about web development",
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: "Travel Diaries",
      description: "Personal travel stories",
    },
  });

  const initialJson = {
    titles: [
      "Next.js 15 is Here!",
      "Tailwind CSS Tips",
      "Prisma Best Practices",
    ],
    descriptions: [
      "Deep dive into new features",
      "Boost your styling",
      "ORM mastery",
    ],
    paragraph: "This is the starting paragraph for your article...",
  };

  await prisma.post.createMany({
    data: [
      {
        title: initialJson.titles[0],
        description: initialJson.descriptions[0],
        article: "# Welcome\n\nStart writing...",
        imageUrl: "/uploads/sample1.jpg",
        initialJson,
        projectId: project1.id,
      },
      {
        title: initialJson.titles[1],
        description: initialJson.descriptions[1],
        article: "# Styling\n\nUse utility classes...",
        imageUrl: "/uploads/sample2.jpg",
        initialJson,
        projectId: project1.id,
      },
      {
        title: "Paris Adventure",
        description: "A week in France",
        article: "# Bonjour\n\nEiffel Tower at night...",
        imageUrl: "/uploads/paris.jpg",
        initialJson: {
          titles: ["Paris", "London", "Tokyo"],
          descriptions: ["City of Light", "Big Ben", "Neon Lights"],
          paragraph: "My journey begins...",
        },
        projectId: project2.id,
      },
    ],
  });

  console.log("Seeded 2 projects with 3 posts total");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
