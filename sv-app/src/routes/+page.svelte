
<svelte:head>
	<title>Mark by Ankur Seth</title>
</svelte:head>

<script lang="ts">
	import { marked } from "marked";
	import sanitize from "sanitize-html";

	let markdown = $state('# Welcome to Mark');
	let html = $derived.by(() => {
		const rawHtml = marked.parse(markdown);
		const sanitizedHtml = sanitize(rawHtml);
		return sanitizedHtml;
	});
</script>

<section class="min-h-screen grid grid-cols-2">
	<section>
		{@html html}
	</section>

	<section class="">
		<textarea class="w-full h-full" bind:value={markdown}></textarea>
	</section>
</section>
