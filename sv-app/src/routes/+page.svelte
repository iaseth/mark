
<svelte:head>
	<title>Mark by Ankur Seth</title>
</svelte:head>

<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import Output from "$lib/components/Output.svelte";
	import { onMount } from "svelte";
	import { DEFAULT_MARKDOWN, getLocalStorage, markdownToHtml, setLocalStorage } from "$lib/localstorage";

	let markdown = $state(DEFAULT_MARKDOWN);
	let mounted = $state(false);
	let html = $derived.by(() => {
		if (mounted) {
			setLocalStorage(markdown);
		}

		return markdownToHtml(markdown);
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
