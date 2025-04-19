import { browser } from "$app/environment";
import { marked } from "marked";
import sanitize from "sanitize-html";



const LOCAL_STORAGE_KEY = 'com-redpapr-mark';

export const DEFAULT_MARKDOWN = `# Hi Mark`;

export function getLocalStorage (): string {
	if (browser) {
		return localStorage.getItem(LOCAL_STORAGE_KEY) || DEFAULT_MARKDOWN;
	}
	return DEFAULT_MARKDOWN;
}

export function setLocalStorage (html: string) {
	if (browser) localStorage.setItem(LOCAL_STORAGE_KEY, html);
}

export function markdownToHtml (markdown: string) {
	const rawHtml = marked.parse(markdown);
	const sanitizedHtml = (typeof rawHtml == 'string') ? sanitize(rawHtml) : "";
	return sanitizedHtml;
}
