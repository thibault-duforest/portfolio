<script lang="ts">
	// import { locales, localizeHref } from '$lib/paraglide/runtime';

	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="m-auto flex h-screen flex-col lg:flex-row">
	<div class="h-15 w-full overflow-hidden bg-gray-800 p-4 text-white md:h-auto lg:w-52">
		<Nav />
	</div>

	<main class="mb:p-4 flex-1 overflow-auto">
		{@render children()}
	</main>
</div>

<!-- <div style="display:none">
		{#each locales as locale}
			<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
		{/each}
	</div> -->
