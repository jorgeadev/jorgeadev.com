import { SignInButton } from "@/components/auth/signin/signin-button";
import { type SignInPageProps } from "@/types/auth";
import { Suspense } from "react";

const SignInPage = async ({ searchParams }: SignInPageProps) => {
	return (
		<div className="mx-auto min-h-96 max-w-screen-2xl flex-1 place-content-center">
			<div className="lg:p-8">
				<div className="space-y-6 text-center">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
							Welcome to jorgeadev.com Public Beta!
						</h1>
						<p className="text-muted-foreground text-sm">
							Start your journey by logging in below
						</p>
					</div>

					<Suspense>
						<SignInButton redirectTo={(await searchParams).redirectTo ?? "/blog"} />
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;