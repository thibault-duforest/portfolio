<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	import * as m from '$lib/paraglide/messages.js';
	import type { queryMatches } from '$lib/types/mediaQuery';
	import { RoutePath } from '$lib/types/route';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { getLocalizedUrl } from '$lib/utils/route';
	import ArrowLeft from '$lib/assets/svg/arrow-left.svg?component';
	import ExternalLink from '$lib/assets/svg/external-link.svg?component';

	export let data;

	function goBack() {
		goto(getLocalizedUrl(RoutePath.PROJECTS));
	}
</script>

<div in:fade={{ duration: 300 }}>
	<button
		type="button"
		on:click={goBack}
		class="mb-6 flex cursor-pointer items-center text-blue-600 transition-colors hover:text-blue-800 focus:outline-offset-4 focus:outline-gray-800"
	>
		<ArrowLeft class="mr-2 h-5 w-5" />
		{m.project_back()}
	</button>

	<div class="overflow-hidden bg-white shadow-lg sm:rounded-lg" in:fly={{ y: 50, duration: 400 }}>
		<div class="overflow-hidden md:h-80">
			<MediaQuery>
				{#snippet children({ $matches }: { $matches: queryMatches })}
					{@const { mobile } = $matches}

					{#if mobile}
						<enhanced:img
							src={data.project.bannerMobile}
							alt={data.project.name}
							class="h-full w-full object-contain"
						/>
					{:else}
						<enhanced:img
							src={data.project.banner}
							alt={data.project.name}
							class="h-full w-full object-cover object-left"
						/>
					{/if}
				{/snippet}
			</MediaQuery>
		</div>

		<div class="p-2 md:p-8">
			<div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
				<div>
					<h1 class="inline-block text-3xl font-bold">{data.project.name}</h1>
					-
					<p class="inline-block text-gray-500">{data.project.location}</p>
				</div>
				<p class="mb-3 text-gray-600">
					{data.project.startDate}
					{#if data.project.endDate}
						- {data.project.endDate}
					{/if}
				</p>
			</div>
			<p class="mb-6">{data.project.position}</p>

			<div class="mb-6 flex flex-wrap gap-2">
				{#each data.project.technologies as tech}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">{tech}</span>
				{/each}
			</div>

			<div class="mb-8">
				<h2 class="mb-4 text-xl font-semibold">{m.project_description()}</h2>
				<p class="text-gray-700">{data.project.description}</p>
			</div>

			<div class="mb-8">
				<h2 class="mb-4 text-xl font-semibold">{m.project_jobs()}</h2>
				<ul class="list-disc space-y-2 pl-5">
					{#each data.project.missions as mission}
						<li class="text-gray-700">{mission}</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row">
				{#if data.project.github}
					<a
						href={data.project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-900 focus:outline-offset-4 focus:outline-gray-800"
					>
						{m.project_source_code()}
						<ExternalLink class="ml-2 h-5 w-5" />
					</a>
				{/if}
				{#if data.project.website}
					<a
						href={data.project.website}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-offset-4 focus:outline-gray-800"
					>
						{m.project_website()}
						<ExternalLink class="ml-2 h-5 w-5" />
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
