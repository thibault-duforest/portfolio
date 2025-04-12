<script lang="ts">
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types/skill';

	onMount(() => {
		const skillBars = document.querySelectorAll<HTMLElement>('.skill-bar');

		setTimeout(() => {
			if (skillBars) {
				skillBars.forEach((bar) => {
					bar.style.width = bar.dataset.level || '0%';
				});
			}
		}, 300);
	});

	export let data;

	const skillsByCategory = data.skills.reduce<{ [key: string]: Skill[] }>((result, current) => {
		if (!result[current.categoryLabel]) {
			result[current.categoryLabel] = [];
		}

		result[current.categoryLabel].push(current);

		return result;
	}, {});

	const categories = Object.keys(skillsByCategory);
</script>

<!-- Profile -->
<h1 class="text-3xl font-bold text-gray-800">Thibault DUFOREST</h1>
<div class="mt-2 flex flex-wrap gap-4">
	<div class="flex items-center text-gray-600">
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
				d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
		<span>37 ans</span>
	</div>

	<div class="flex items-center text-gray-600">
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
				d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
		<span>Valenton, Val-de-Marne, France</span>
	</div>

	<div class="flex items-center text-gray-600">
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
				d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
		<span>13 ans d'expérience</span>
	</div>
</div>

<!-- Introduction -->
<div class="mt-8">
	<h2 class="mb-4 text-xl font-semibold text-gray-800">Profil</h2>
	<div class="space-y-3 text-gray-700">
		<p>
			Développeur Front-End depuis 2011, j'accompagne les entreprises en freelance pour concevoir et
			optimiser des interfaces web modernes, performantes et accessibles.
		</p>
		<p>
			J'intègre des applications en HTML/CSS dans le respect des bonnes pratiques d'accessibilité et
			je possède également de l'expérience en Design System et Design Tokens, permettant de garantir
			la cohérence visuelle et technique des interfaces.
		</p>
		<p>
			Fort d'une expertise approfondie en JavaScript et TypeScript, j'interviens sur le
			développement d'applications complexes (ReactJS, VueJS). Sensible aux enjeux de qualité et
			d'automatisation, j'intègre des stratégies de tests unitaires pour assurer la robustesse et la
			maintenabilité des projets.
		</p>
	</div>
</div>

<!-- Skills -->
<div class="mt-10">
	<h2 class="mb-6 text-xl font-semibold text-gray-800">Compétences</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each categories as category}
			<div class="rounded-lg bg-gray-50 p-4">
				<h3 class="mb-3 font-medium text-gray-800">{category}</h3>
				<div class="space-y-3">
					{#each skillsByCategory[category] as skill}
						<div>
							<div class="mb-1 flex justify-between">
								<span class="text-sm font-medium text-gray-700">{skill.name}</span>
								<span class="text-sm font-medium text-gray-500">{skill.level}</span>
							</div>
							<div class="h-2 rounded-full bg-gray-200">
								<div
									class={`skill-bar h-2 rounded-full ${skill.colorClass} transition-all duration-1000 ease-out`}
									style="width: 0%"
									data-level={skill.level}
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Education & Languages -->
<div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
	<!-- Education -->
	<div>
		<h2 class="mb-4 text-xl font-semibold text-gray-800">Formation</h2>
		<div class="space-y-3">
			<div class="border-l-2 border-blue-200 pl-4">
				<p class="text-sm text-gray-500">2010 - 2012</p>
				<p class="font-medium text-gray-800">Technicien du Web</p>
				<p class="text-gray-600">CIFACOM, Montreuil</p>
			</div>
			<div class="border-l-2 border-blue-200 pl-4">
				<p class="text-sm text-gray-500">2006 - 2009</p>
				<p class="font-medium text-gray-800">DUT Techniques de commercialisation</p>
				<p class="text-gray-600">UIT de Roubaix, Roubaix</p>
			</div>
		</div>
	</div>

	<!-- Languages -->
	<div>
		<h2 class="mb-4 text-xl font-semibold text-gray-800">Langues</h2>
		<div class="space-y-3">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<span
						class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800"
						>FR</span
					>
				</div>
				<div class="ml-3">
					<p class="font-medium text-gray-800">Français</p>
					<p class="text-sm text-gray-600">Langue maternelle</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<span
						class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800"
						>EN</span
					>
				</div>
				<div class="ml-3">
					<p class="font-medium text-gray-800">Anglais</p>
					<p class="text-sm text-gray-600">Courant</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<span
						class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800"
						>ES</span
					>
				</div>
				<div class="ml-3">
					<p class="font-medium text-gray-800">Espagnol</p>
					<p class="text-sm text-gray-600">Niveau lycée</p>
				</div>
			</div>
		</div>
	</div>
</div>
