
<svelte:head>
	<title>Mark by Ankur Seth</title>
</svelte:head>

<script lang="ts">
	import { getLocalStorage, setLocalStorage } from "$lib/localstorage";
	import { marked } from "marked";
	import sanitize from "sanitize-html";

	let markdown = $state(getLocalStorage());
	let html = $derived.by(() => {
		setLocalStorage(markdown);
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
		<textarea autofocus class="w-full h-full textarea textarea-primary" bind:value={markdown}></textarea>
	</section>
</section>
