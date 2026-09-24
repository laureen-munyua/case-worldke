const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.phoneCase.createMany({
    data: [
      {
        name: "Luxury Marble Case",
        price: 1500,
        brand: "iPhone 15 Pro",
        material: "Hard Plastic",
        color: "White & Gold",
        image:
          "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600",
      },
      {
        name: "Black Leather Case",
        price: 2000,
        brand: "Samsung S24",
        material: "Genuine Leather",
        color: "Black",
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
      },
      {
        name: "Gold Glitter Case",
        price: 1200,
        brand: "iPhone 14",
        material: "TPU",
        color: "Gold",
        image:
          "https://images.unsplash.com/photo-1583394293218-6cdd5498cc09?w=600",
      },
      {
        name: "Matte Black Case",
        price: 1800,
        brand: "iPhone 15",
        material: "Hard Plastic",
        color: "Black",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      },
      {
        name: "Rose Gold Case",
        price: 1600,
        brand: "Samsung S23",
        material: "Silicone",
        color: "Rose Gold",
        image:
          "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600",
      },
      {
        name: "Carbon Fiber Case",
        price: 2500,
        brand: "iPhone 15 Pro Max",
        material: "Carbon Fiber",
        color: "Black",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600",
      },
    ],
  });
  console.log("Phone cases seeded successfully!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
