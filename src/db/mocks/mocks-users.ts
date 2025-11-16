import type { Prisma } from "@prisma/generated/client";
import { faker } from "@faker-js/faker";

export const createUser = (): Prisma.UserCreateManyInput => {
	// Create the email address
	const email = faker.internet.email().toLowerCase();

	// Created timestamp
	const createdAt = faker.date.between({ from: "2022-06-01", to: new Date() });

	return {
		email,
		name: faker.person.fullName(),
		image: faker.image.avatar(),
		emailVerified: faker.date.between({ from: createdAt, to: new Date() }),
		createdAt,
		updatedAt: createdAt,
	};
};

export const createUsers = (numberOfUsersToCreate: number): Prisma.UserCreateManyInput[] => {
	return Array.from({ length: numberOfUsersToCreate }, () => createUser());
};