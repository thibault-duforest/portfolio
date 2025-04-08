<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	import type { queryMatches } from '$lib/types/mediaQuery.js';
	import MediaQuery from '$lib/components/MediaQuery.svelte';

	export let data;

	function goBack() {
		goto(`${base}/projects`);
	}
</script>

<div class="container mx-auto py-8 md:px-4" in:fade={{ duration: 300 }}>
	<button
		type="button"
		on:click={goBack}
		class="mb-6 flex cursor-pointer items-center text-blue-600 transition-colors hover:text-blue-800"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="mr-2 h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			/>
		</svg>
		Retour aux projets
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
				<h2 class="mb-4 text-xl font-semibold">Description</h2>
				<p class="text-gray-700">{data.project.description}</p>
			</div>

			<div class="mb-8">
				<h2 class="mb-4 text-xl font-semibold">Missions</h2>
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
						class="flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-900"
					>
						<svg
							class="mr-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
							/>
						</svg>
						Code source
					</a>
				{/if}
				{#if data.project.website}
					<a
						href={data.project.website}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
					>
						<svg
							class="mr-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
						Site internet
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
