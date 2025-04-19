
<script lang="ts">
	import { onMount } from "svelte";
	import type { KeyboardEventHandler } from "svelte/elements";

	interface Props {
		value: string
	};
	let { value = $bindable() }: Props = $props();

	let me: HTMLTextAreaElement|null = $state(null);

	onMount(() => {
		if (me) me.focus();
	});
</script>

<textarea bind:this={me} id="input" bind:value={value} rows={10}
	class="block container w-full min-h-screen grow px-6 py-8 bg-base-200 font-mono leading-relaxed overflow-none resize-none nostyles"></textarea>
