import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    await prisma.phoneCase.delete({
      where: { id: parseInt(params.id) },
    });
    return Response.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
