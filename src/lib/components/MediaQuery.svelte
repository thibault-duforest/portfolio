<script lang="ts">
	import { createMediaStore } from 'svelte-media-queries';

	const query = {
		mobile: '(max-width: 480px)',
		tablet: '(min-width: 480px) and (max-width: 768px)',
		largeTablet: '(min-width: 766px) and (max-width: 1200px)',
		desktop: '(min-width: 1200px)',
		themes: {
			dark: '(prefers-color-scheme: dark)',
			light: '(prefers-color-scheme: light)'
		}
	};

	const matches = createMediaStore(query);

	let { children } = $props();
</script>

{#if $matches}
	{@render children({ $matches })}
{/if}
