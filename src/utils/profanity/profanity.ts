import { Filter } from "bad-words";
import { BAD_WORDS_FILTER } from "@/utils/constants";

const f = new Filter();
f.addWords(...BAD_WORDS_FILTER);

export const containsProfanity = (text: string) => {
	return f.isProfane(text);
};