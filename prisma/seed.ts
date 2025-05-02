import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    await tx.user.deleteMany({});
    await tx.user.createMany({
      data: [
        { name: 'John Doe' },
        { name: 'Jane Smith' },
        { name: 'Bob Johnson' },
      ],
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
