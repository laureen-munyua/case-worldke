const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.phoneCase.deleteMany();

  await prisma.phoneCase.createMany({
    data: [
      {
        name: "Street Wear Case",
        brand: "iPhone 13 to 16 Pro Max, Samsung S22 Ultra to S25 Ultra",
        price: 850,
        material: "Hard Plastic",
        color: "Street Print",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Street+Wear",
      },
      {
        name: "Cherry",
        brand: "iPhone 13 Pro Max to 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Cherry Red",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Cherry",
      },
      {
        name: "Leopard Print",
        brand: "iPhone 16 Pro to 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Leopard",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Leopard+Print",
      },
      {
        name: "Northface",
        brand: "Samsung S22 Ultra to S25 Ultra",
        price: 700,
        material: "Hard Plastic",
        color: "Black & White",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Northface",
      },
      {
        name: "Bow Knot",
        brand:
          "iPhone 16 Pro Max to 17 Pro Max, Samsung S23 Ultra to S24 Ultra",
        price: 850,
        material: "Silicone",
        color: "Pink",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Bow+Knot",
      },
      {
        name: "Embossed Roses",
        brand: "iPhone 12 Pro Max to 17 Pro Max, 17 Air, iPhone 15 to 17 Pro",
        price: 1200,
        material: "Hard Plastic",
        color: "Rose Gold",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Embossed+Roses",
      },
      {
        name: "Polka Dots",
        brand: "iPhone 14 to 15 Pro Max",
        price: 1200,
        material: "Silicone",
        color: "Multi Color",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Polka+Dots",
      },
      {
        name: "Hello Kitty",
        brand: "iPhone 12 to 17 Pro Max, iPhone 15 to 17 Pro, 17 Air",
        price: 1200,
        material: "Hard Plastic",
        color: "Pink & White",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Hello+Kitty",
      },
      {
        name: "Lolo Betty",
        brand: "iPhone 16 to 17 Pro Max",
        price: 1500,
        material: "Hard Plastic",
        color: "Multi Color",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Lolo+Betty",
      },
      {
        name: "Magsafe Floral Case",
        brand: "iPhone 16 to 16 Pro Max, 17 Pro",
        price: 1200,
        material: "Magsafe",
        color: "Floral",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Magsafe+Floral",
      },
      {
        name: "Retro Vibe",
        brand: "iPhone 14 to 17 Pro Max, iPhone 16 Pro to 17 Pro",
        price: 1200,
        material: "Hard Plastic",
        color: "Retro",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Retro+Vibe",
      },
      {
        name: "Kickstand Case",
        brand: "iPhone 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Black",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Kickstand",
      },
      {
        name: "Frosted Magsafe",
        brand: "iPhone 14 Pro Max to 17 Pro Max",
        price: 1200,
        material: "Frosted Magsafe",
        color: "Frosted Clear",
        image:
          "https://placehold.co/600x400/000000/E8B44F?text=Frosted+Magsafe",
      },
      {
        name: "Vintage Elegance",
        brand: "iPhone 16, 17 Pro Max, 17 Pro",
        price: 1500,
        material: "Leather",
        color: "Vintage Brown",
        image:
          "https://placehold.co/600x400/000000/E8B44F?text=Vintage+Elegance",
      },
      {
        name: "Leather Luxe",
        brand: "iPhone 16 to 17 Pro Max",
        price: 1500,
        material: "Genuine Leather",
        color: "Black",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Leather+Luxe",
      },
      {
        name: "Blossoms",
        brand: "Samsung A16 to A57",
        price: 850,
        material: "Silicone",
        color: "Pink Floral",
        image: "https://placehold.co/600x400/000000/E8B44F?text=Blossoms",
      },
    ],
  });
  console.log("16 cases seeded successfully!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
