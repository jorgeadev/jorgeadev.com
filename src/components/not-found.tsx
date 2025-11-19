"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export const NotFoundPage = () => {
	return (
		<div className="flex w-full flex-1 items-center justify-center">
			<main className="py-16">
				<div className="mx-auto max-w-2xl text-center">
					<Card>
						<CardContent className="py-12">
							<div className="text-muted-foreground mb-4 text-6xl font-bold">404</div>
							<h1 className="mb-4 text-3xl font-bold">Page Not Found</h1>
							<p className="text-muted-foreground mb-8 text-pretty">
								Sorry, we couldn&#39;t find the page you&#39;re looking for. It might have been
								moved, deleted, or you entered the wrong URL
							</p>

							<div className="flex flex-col justify-center gap-4 sm:flex-row">
								<Button
									variant="outline"
									onClick={() => window.history.back()}
									className="cursor-pointer"
								>
									<ArrowLeft className="mr-2 h-4 w-4" />
									Go Back
								</Button>

								<Button asChild>
									<Link href="/">
										<Home className="mr-2 h-4 w-4" />
										Go Home
									</Link>
								</Button>

								<Button variant="outline" asChild>
									<Link href="/blog/articles">
										<Search className="mr-2 h-4 w-4" />
										Browse Articles
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
};
