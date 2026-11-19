// src/types/wordpress.ts

export interface WPTerm {
	id: number;
	name: string;
	slug: string;
	taxonomy: string;
}

export interface WPPost {
	id: number;
	slug: string;
	date: string;
	modified: string;
	title: { rendered: string };
	excerpt: { rendered: string };
	content: { rendered: string };
	_embedded?: {
		author?: { name: string }[];
		"wp:featuredmedia"?: {
			source_url: string;
			alt_text: string;
			media_details?: {
				sizes?: {
					name?: string;
					sourceUrl?: string;
					source_url?: string;
					width?: number | string;
					height?: number | string;
				}[];
			};
		}[];
		"wp:term"?: WPTerm[][];
	};
}

export interface FeaturedImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	thumbnail: string;
	medium: string;
	large: string;
	srcset?: string;
}
