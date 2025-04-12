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

<div in:fade={{ duration: 300 }}>
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
						Code source
						<svg
							class="ml-2 h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 00-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
					</a>
				{/if}
				{#if data.project.website}
					<a
						href={data.project.website}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
					>
						Site internet
						<svg
							class="ml-2 h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 00-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
