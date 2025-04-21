<script lang="ts">
	import { page } from '$app/state';
	import { beforeNavigate } from '$app/navigation';

	import * as m from '$lib/paraglide/messages.js';
	import { RoutePath } from '$lib/types/route';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
	import { getLocalizedUrl } from '$lib/utils/route';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	beforeNavigate(() => closeMenu());
</script>

<nav
	class="flex flex-row items-center justify-between lg:flex-col lg:items-start lg:justify-normal"
>
	<button onclick={toggleMenu} class="flex items-center p-3 text-white sm:hidden">
		<svg class="block h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<rect y="5" width="24" height="2" rx="1" fill="currentColor" stroke-linecap="round" />
			<rect y="11" width="24" height="2" rx="1" fill="currentColor" stroke-linecap="round" />
			<rect y="17" width="24" height="2" rx="1" fill="currentColor" stroke-linecap="round" />
		</svg>
		<span class="sr-only">{m.nav_open_navigation()}</span>
	</button>

	<div
		class={[
			isMenuOpen && 'translate-x-0',
			'absolute inset-y-0 left-0 z-1 ml-0 h-full w-full -translate-x-full transform bg-gray-800 p-4 transition duration-200 ease-in-out sm:static sm:ml-2 sm:h-auto sm:w-auto sm:translate-x-0 sm:bg-transparent sm:p-0 md:relative'
		]}
	>
		<div class="flex flex-row items-start justify-between">
			<ul class="flex flex-col space-x-4 sm:flex-row lg:block lg:space-y-4 lg:space-x-0">
				{#snippet navLink(href: string, label: string, title: string)}
					<li class="py-3 sm:py-0">
						<a
							href={getLocalizedUrl(href)}
							{title}
							class="inline-block w-full hover:text-gray-300 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white"
							class:active={page.url.pathname === href}
						>
							{label}
						</a>
					</li>
				{/snippet}

				{@render navLink(RoutePath.HOME, m.nav_home_label(), m.nav_home_description())}
				{@render navLink(RoutePath.ABOUT, m.nav_about_label(), m.nav_about_description())}
				{@render navLink(RoutePath.PROJECTS, m.nav_projects_label(), m.nav_projects_description())}
			</ul>

			<button onclick={toggleMenu} class="flex items-center p-3 text-white sm:hidden">
				<svg
					class="block h-6 w-6 fill-current"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="5"
						y1="5"
						x2="19"
						y2="19"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<line
						x1="19"
						y1="5"
						x2="5"
						y2="19"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
				<span class="sr-only">{m.nav_close_navigation()}</span>
			</button>
		</div>
	</div>

	<div class="ml-4 lg:mt-4 lg:ml-0">
		<LanguageSwitch />
	</div>
</nav>
