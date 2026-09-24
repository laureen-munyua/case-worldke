import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cases = await prisma.phoneCase.findMany();
    return Response.json({ cases }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const newCase = await prisma.phoneCase.create({
      data: {
        name: body.name,
        price: body.price,
        brand: body.brand,
        material: body.material,
        color: body.color,
        image: body.image,
      },
    });
    return Response.json({ case: newCase }, { status: 201 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
