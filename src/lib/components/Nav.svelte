<script lang="ts">
	import { page } from '$app/state';

	import * as m from '$lib/paraglide/messages.js';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
	import { getBasePath } from '$lib/utils/route';
</script>

<nav>
	<ul class="flex space-x-4 lg:block lg:space-y-4 lg:space-x-0">
		{#snippet navLink(href: string, label: string, title: string)}
			<li>
				<a {href} {title} class="hover:text-gray-300" class:active={page.url.pathname === href}>
					{label}
				</a>
			</li>
		{/snippet}

		{@render navLink(`${getBasePath()}/`, m['nav.home_label'](), m['nav.home_description']())}
		{@render navLink(
			`${getBasePath()}/about`,
			m['nav.about_label'](),
			m['nav.about_description']()
		)}
		{@render navLink(
			`${getBasePath()}/projects`,
			m['nav.projects_label'](),
			m['nav.projects_description']()
		)}
	</ul>

	<div class="mt-4">
		<LanguageSwitch />
	</div>
</nav>
