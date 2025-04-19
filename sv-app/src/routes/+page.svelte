
<svelte:head>
	<title>Mark by Ankur Seth</title>
</svelte:head>

<script lang="ts">
	import { marked } from "marked";
	import sanitize from "sanitize-html";

	let markdown = $state('# Welcome to Mark');
	let html = $derived.by(() => {
		const rawHtml = marked.parse(markdown);
		const sanitizedHtml = (typeof rawHtml == 'string') ? sanitize(rawHtml) : "";
		return sanitizedHtml;
	});
</script>

<section class="min-h-screen grid grid-cols-2">
	<section class="px-4 py-6 prose">
		{@html html}
	</section>

	<section class="">
		<textarea class="w-full h-full textarea" bind:value={markdown}></textarea>
	</section>
</section>
