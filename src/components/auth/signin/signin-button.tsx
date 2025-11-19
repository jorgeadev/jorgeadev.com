"use client";

import { Button } from "@/components/ui/button";
import { GitHub } from "@/utils/icons";
import { signIn } from "@/auth/react";
import { type State } from "@/types/auth";
import { useState } from "react";

export const SignInButton = ({ redirectTo }: { redirectTo?: string }) => {
	const [state, setState] = useState<State>("idle");

	const handleSignIn = async () => {
		try {
			setState("pending");
			await signIn("github", { callbackUrl: redirectTo });
		} catch {
			setState("error");
		}
	};

	return (
		<div className="mx-auto rounded-md duration-300">
			<Button
				variant="outline"
				size="lg"
				onClick={handleSignIn}
				disabled={state === "pending"}
				className="fancy-border-gradient hover:bg-background relative mx-auto flex cursor-pointer gap-4 border-none hover:shadow-[0_0_2rem_-0.5rem_#3178c6]"
			>
				SignIn with GitHub
				<GitHub />
			</Button>
		</div>
	);
};