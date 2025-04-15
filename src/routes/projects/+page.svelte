<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages.js';

	export let data;

	function navigateToProject(slug: string) {
		goto(`${base}/projects/${slug}`);
	}
</script>

<h1 class="mb-12 text-3xl font-bold text-gray-800">
	{m['projects.title']()}
</h1>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each data.projects as project (project.id)}
		<button
			type="button"
			class="flex transform cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
			on:click={() => navigateToProject(project.slug.toString())}
			in:fly={{ y: 50, duration: 300, delay: 300 }}
		>
			<div class="h-48 overflow-hidden">
				<enhanced:img src={project.logo} alt={project.name} class="h-full w-full object-contain" />
			</div>
			<div class="flex flex-col items-center p-6 text-center">
				<h2 class="mb-2 text-xl font-semibold">{project.name}</h2>
				<p class="mb-3 text-gray-600">
					{project.startDate}
					{#if project.endDate}
						- {project.endDate}
					{/if}
				</p>
				<div class="flex flex-wrap justify-center gap-2">
					{#each project.technologies as tech}
						<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">{tech}</span>
					{/each}
				</div>
			</div>
		</button>
	{/each}
</div>
