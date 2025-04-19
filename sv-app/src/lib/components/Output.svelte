
<script lang="ts">
	interface Props {
		html: string
	};
	let { html }: Props = $props();
</script>

<article class="prose container px-4 py-16 pb-36">
	{@html html}
</article>
