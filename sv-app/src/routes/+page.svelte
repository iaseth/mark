
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

	let mode = $state('dual');
	function switchMode () {
		const modes = ['dual', 'edit', 'view'];
		const currentIndex = modes.indexOf(mode);
		const nextIndex = (currentIndex + 1) % modes.length;
		mode = modes[nextIndex];
	}

	function onkeydown (e: KeyboardEvent) {
		if (e.ctrlKey && e.key.toLowerCase() === 'm') {
			e.preventDefault();
			switchMode();
		}
	}

	onMount(() => {
		markdown = getLocalStorage();
		mounted = true;
	});
</script>

<svelte:window {onkeydown} />

{#if mode === 'edit'}
	<section class="min-h-screen">
		<Input bind:value={markdown} />
	</section>
{:else if mode === 'view'}
	<section class="min-h-screen">
		<Output {html} />
	</section>
{:else}
	<section class="h-screen grid grid-cols-2 overflow-y-hidden">
		<section class="h-full overflow-y-auto">
			<Output {html} />
		</section>

		<section class="h-full flex flex-col">
			<Input bind:value={markdown} />
		</section>
	</section>
{/if}
