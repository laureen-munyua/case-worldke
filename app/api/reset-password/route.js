import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { email },
      data: { password: hashed },
    });
    return Response.json(
      { message: "Password reset successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
