<script lang="ts">
	import { page } from '$app/state';

	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Thibault Duforest - {m.head_title()}</title>
	<meta name="description" content={m.head_meta_description()} />
	<meta name="keywords" content={m.head_meta_keywords()} />
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "Person",
		  "name": "Thibault Duforest",
		  "url": "https://thibault-duforest.github.io/portfolio/",
		  "jobTitle": m.head_title()
		}
	</script>
</svelte:head>

<div class="m-auto flex h-screen flex-col lg:flex-row">
	<div class="h-24 w-full bg-gray-800 p-4 text-white md:h-auto lg:w-52">
		<Nav />
	</div>

	<main
		class="w-full overflow-auto focus-visible:outline-2 focus-visible:-outline-offset-8"
		tabindex="0"
	>
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
