
<script lang="ts">
	import { onMount } from "svelte";

	interface Props {
		value: string
	};
	let { value = $bindable() }: Props = $props();

	let me: HTMLTextAreaElement|null = $state(null);

	onMount(() => {
		if (me) me.focus();
	});
</script>

<textarea bind:this={me} id="input" bind:value={value}
	class="w-full grow font-mono leading-relaxed bg-base-100 resize-none border-0 outline-0"></textarea>
