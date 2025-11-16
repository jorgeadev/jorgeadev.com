import "dotenv/config";
import prisma from "@/lib/prisma";
import { createUsers } from "@/db/mocks/mocks-users";

const main = async () => {
	console.log("🌱 Seeding database...");

	try {
		console.log("Creating Users...");

		await prisma.user.createMany({
			data: createUsers(2),
		});

		console.log("Users created!");

		console.log("🎉 Database seeding completed!");
	} catch (error) {
		console.error("Error seeding database:", error);
		throw error;
	} finally {
		await prisma.$disconnect();
	}
};

main();