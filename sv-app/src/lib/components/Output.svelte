
<script lang="ts">
	interface Props {
		html: string
	};
	let { html }: Props = $props();
</script>

<article class="prose">
	{@html html}
</article>
