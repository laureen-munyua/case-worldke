import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return Response.json(
        { message: "Email already exists" },
        { status: 400 },
      );
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashed },
    });
    return Response.json(
      { user: { id: user.id, name: user.name, email: user.email } },
      { status: 201 },
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
