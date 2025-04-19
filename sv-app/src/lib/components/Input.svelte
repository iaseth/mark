
<script lang="ts">
	interface Props {
		value: string
	};
	let { value = $bindable() }: Props = $props();
</script>

<textarea autofocus bind:value={value}
	class="w-full grow font-mono bg-base-100 resize-none border-0 outline-0"></textarea>
