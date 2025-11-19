export type SignInPageProps = {
	searchParams: Promise<{ redirectTo?: string }>;
};

export type State = "error" | "idle" | "pending" | "success";

