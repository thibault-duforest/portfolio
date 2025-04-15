<script lang="ts">
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="m-auto flex h-screen flex-col lg:flex-row">
	<div class="h-15 w-full bg-gray-800 p-4 text-white md:h-auto lg:w-52">
		<Nav />
	</div>

	<main class="w-full overflow-auto">
		<div class="container mx-auto px-4 py-8">
			{@render children()}
		</div>
	</main>
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
