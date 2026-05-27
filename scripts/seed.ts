import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed users
    const user = await prisma.user.create({
        data: {
            email: 'student@example.com',
            name: 'Student Name',
            expenses: {
                create: [
                    {
                        title: 'Textbook',
                        amount: 50,
                        category: 'Education',
                        date: new Date('2023-09-01'),
                    },
                    {
                        title: 'Groceries',
                        amount: 30,
                        category: 'Food',
                        date: new Date('2023-09-05'),
                    },
                    {
                        title: 'Transportation',
                        amount: 15,
                        category: 'Transport',
                        date: new Date('2023-09-10'),
                    },
                ],
            },
        },
    });

    console.log({ user });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });