import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return Response.json({ message: "Email not found" }, { status: 404 });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return Response.json({ message: "Incorrect password" }, { status: 401 });
    }
    return Response.json(
      { user: { id: user.id, name: user.name, email: user.email } },
      { status: 200 },
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
