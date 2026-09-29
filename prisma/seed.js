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
        image:
          "https://collection.cloudinary.com/cbssdovm/3eb98dfbdbf660475d8f9a00c19beca2",
      },
      {
        name: "Cherry",
        brand: "iPhone 13 Pro Max to 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Cherry Red",
        image:
          "https://collection.cloudinary.com/cbssdovm/48e0ac0bd2eee27757a6b186cd6d9eeb",
      },
      {
        name: "Leopard Print",
        brand: "iPhone 16 Pro to 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Leopard",
        image:
          "https://collection.cloudinary.com/cbssdovm/e55fbcb57aa735030a6ae9df423d3347",
      },
      {
        name: "Northface",
        brand: "Samsung S22 Ultra to S25 Ultra",
        price: 700,
        material: "Hard Plastic",
        color: "Black & White",
        image:
          "https://collection.cloudinary.com/cbssdovm/1a5643bc10d3a03b5ef8bf12b20d61a4",
      },
      {
        name: "Bow Knot",
        brand:
          "iPhone 16 Pro Max to 17 Pro Max, Samsung S23 Ultra to S24 Ultra",
        price: 850,
        material: "Silicone",
        color: "Pink",
        image:
          "https://collection.cloudinary.com/cbssdovm/7fbbb09ebbd6bf6cba9e9efb0446f3bf",
      },
      {
        name: "Embossed Roses",
        brand: "iPhone 12 Pro Max to 17 Pro Max, 17 Air, iPhone 15 to 17 Pro",
        price: 1200,
        material: "Hard Plastic",
        color: "Rose Gold",
        image:
          "https://collection.cloudinary.com/cbssdovm/e15c428bdc3eab725204fdb850725332",
      },
      {
        name: "Polka Dots",
        brand: "iPhone 14 to 15 Pro Max",
        price: 1200,
        material: "Silicone",
        color: "Multi Color",
        image:
          "https://collection.cloudinary.com/cbssdovm/40d1764ba77efafe2e9374b059c0bed9",
      },
      {
        name: "Hello Kitty",
        brand: "iPhone 12 to 17 Pro Max, iPhone 15 to 17 Pro, 17 Air",
        price: 1200,
        material: "Hard Plastic",
        color: "Pink & White",
        image:
          "https://collection.cloudinary.com/cbssdovm/e2d588497846606c35ce5de1a0b5f74d",
      },
      {
        name: "Lolo Betty",
        brand: "iPhone 16 to 17 Pro Max",
        price: 1500,
        material: "Hard Plastic",
        color: "Multi Color",
        image:
          "https://collection.cloudinary.com/cbssdovm/2c3ae858d7516be21664bd9254154537",
      },
      {
        name: "Magsafe Floral Case",
        brand: "iPhone 16 to 16 Pro Max, 17 Pro",
        price: 1200,
        material: "Magsafe",
        color: "Floral",
        image:
          "https://collection.cloudinary.com/cbssdovm/2f36b48f9db7d13cb28a50dbd62ba2bc",
      },
      {
        name: "Retro Vibe",
        brand: "iPhone 14 to 17 Pro Max, iPhone 16 Pro to 17 Pro",
        price: 1200,
        material: "Hard Plastic",
        color: "Retro",
        image:
          "https://collection.cloudinary.com/cbssdovm/c1ed33429197cbe4e300cb735bd2551c",
      },
      {
        name: "Kickstand Case",
        brand: "iPhone 17 Pro Max",
        price: 1200,
        material: "Hard Plastic",
        color: "Black",
        image:
          "https://collection.cloudinary.com/cbssdovm/c1ed33429197cbe4e300cb735bd2551c",
      },
      {
        name: "Frosted Magsafe",
        brand: "iPhone 14 Pro Max to 17 Pro Max",
        price: 1200,
        material: "Frosted Magsafe",
        color: "Frosted Clear",
        image:
          "https://collection.cloudinary.com/cbssdovm/76a745cd128f23d30fbf1921fd45142c",
      },
      {
        name: "Vintage Elegance",
        brand: "iPhone 16, 17 Pro Max, 17 Pro",
        price: 1500,
        material: "Leather",
        color: "Vintage Brown",
        image:
          "https://collection.cloudinary.com/cbssdovm/60ca1936ac2eb0bb0b80f337752021ff",
      },
      {
        name: "Leather Luxe",
        brand: "iPhone 16 to 17 Pro Max",
        price: 1500,
        material: "Genuine Leather",
        color: "Black",
        image:
          "https://collection.cloudinary.com/cbssdovm/898a7b8c5cebcf4581bab299620fd1cf",
      },
      {
        name: "Blossoms",
        brand: "Samsung A16 to A57",
        price: 850,
        material: "Silicone",
        color: "Pink Floral",
        image:
          "https://collection.cloudinary.com/cbssdovm/d5f6f475bfbbf78402bd7ab35956e97d",
      },
    ],
  });
  console.log("16 cases seeded successfully!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
