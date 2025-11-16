"use server";

import { createUsers } from "@/db/mocks/mocks-users";
import prisma from "@/lib/prisma";

export async function createUserAction() {
	try {
		console.log("Creating users in the database");

		await prisma.user.createMany({
			data: createUsers(1),
		});

		console.log("Users created!");
		return { success: true, message: "Users created successfully!" };
	} catch (error) {
		console.error("Error creating users:", error);
		return { success: false, message: "Failed to create users" };
	}
}