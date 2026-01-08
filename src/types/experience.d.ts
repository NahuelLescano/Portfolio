import type { Tag } from "../types/tags.d";

export interface Experience {
	date: string;
	title: string;
	company: string;
	description: string;
	tags: Tag[];
}
