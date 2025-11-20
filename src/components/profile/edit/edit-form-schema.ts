import { createNoProfanitySchemaWithValidate } from "@/utils/profanity/anti-profanity-zod";
import { z } from "zod";

const validUrlWithHttpOrHttps = z.string().refine((url) => {
	try {
		const parsedUrl = new URL(url);
		return ["http:", "https:"].includes(parsedUrl.protocol);
	} catch {
		return false;
	}
}, { message: "Invalid URL. Must start with http:// or https://" });

export const EditFormSchema = z.object({
	bio: createNoProfanitySchemaWithValidate((text) => text.max(256)),
	userLinks: z.array(
		z.object({
			url: createNoProfanitySchemaWithValidate((text) => text.url().max(256)).and(validUrlWithHttpOrHttps).or(z.literal("")),
		}),
	).max(5, "You can add up to 4 links only"),
});

export type EditFormSchema = z.infer<typeof EditFormSchema>;