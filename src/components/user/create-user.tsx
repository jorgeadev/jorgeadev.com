
"use client";

import { Button } from "../ui/button";
import { createUserAction } from "@/actions/cretae-user-action";

export const CreateUser = () => {

	const handleInsertUser = async () => {
		const result = await createUserAction();

		if (result.success) {
			console.log(result.message);
		} else {
			console.error(result.message);
		}
	};

	return (
		<Button variant="outline" className="cursor-pointer" onClick={handleInsertUser}>
			Insert User
		</Button>
	);
};