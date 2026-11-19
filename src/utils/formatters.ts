// src/utils/formatters.ts

export function stripHtml(html: string): string {
	if (!html) return "";
	return html
		.replace(/<[^>]*>/g, " ")
		.replace(/&hellip;/g, "…")
		.replace(/&amp;/g, "&")
		.replace(/&#8217;|&#039;/g, "'")
		.replace(/&#8216;/g, "'")
		.replace(/&#8220;|&#8221;/g, '"')
		.replace(/&nbsp;/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export function estimateReadTime(html: string): string {
	if (!html) return "1 min read";
	const words = stripHtml(html).split(" ").filter(Boolean).length;
	const minutes = Math.max(1, Math.round(words / 200));
	return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
	if (!dateString) return "";
	return new Date(dateString).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
