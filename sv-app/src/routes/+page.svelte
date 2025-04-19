
<svelte:head>
	<title>Mark by Ankur Seth</title>
</svelte:head>

<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import Output from "$lib/components/Output.svelte";
import { DEFAULT_MARKDOWN, getLocalStorage, setLocalStorage } from "$lib/localstorage";
	import { marked } from "marked";
	import sanitize from "sanitize-html";
	import { onMount } from "svelte";

	let markdown = $state(DEFAULT_MARKDOWN);
	let mounted = $state(false);
	let html = $derived.by(() => {
		if (mounted) {
			setLocalStorage(markdown);
		}

		const rawHtml = marked.parse(markdown);
		const sanitizedHtml = (typeof rawHtml == 'string') ? sanitize(rawHtml) : "";
		return sanitizedHtml;
	});

	onMount(() => {
		markdown = getLocalStorage();
		mounted = true;
	});
</script>

<section class="min-h-screen grid grid-cols-2">
	<section class="px-4 py-6">
		<Output {html} />
	</section>

	<section class="h-screen flex flex-col">
		<Input bind:value={markdown} />
	</section>
</section>
