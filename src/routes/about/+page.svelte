<script lang="ts">
	import { onMount } from 'svelte';

	import type { Skill } from '$lib/types/skill';
	import * as m from '$lib/paraglide/messages.js';
	import Calendar from '$lib/assets/svg/calendar.svg?component';
	import Location from '$lib/assets/svg/location.svg?component';
	import Suitcase from '$lib/assets/svg/suitcase.svg?component';

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
		<Calendar class="mr-2 h-5 w-5" />
		<span>{m.about_age()}</span>
	</div>

	<div class="flex items-center text-gray-600">
		<Location class="mr-2 h-5 w-5" />
		<span>Valenton, Val-de-Marne, France</span>
	</div>

	<div class="flex items-center text-gray-600">
		<Suitcase class="mr-2 h-5 w-5" />
		<span>{m.about_years_of_experience()}</span>
	</div>
</div>

<!-- Introduction -->
<div class="mt-8">
	<h2 class="mb-4 text-xl font-semibold text-gray-800">Profil</h2>
	<div class="space-y-3 text-gray-700">
		<p>
			{m.about_presentation_1()}
		</p>
		<p>
			{m.about_presentation_2()}
		</p>
		<p>
			{m.about_presentation_3()}
		</p>
	</div>
</div>

<!-- Skills -->
<div class="mt-10">
	<h2 class="mb-6 text-xl font-semibold text-gray-800">{m.about_skills_title()}</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each categories as category}
			<div class="rounded-lg bg-gray-50 p-4">
				<h3 class="mb-3 font-medium text-gray-800">{category}</h3>
				<div class="space-y-3">
					{#each skillsByCategory[category] as skill}
						<div>
							<div class="mb-1 flex justify-between">
								<span class="text-sm font-medium text-gray-700">{skill.name}</span>
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
		<h2 class="mb-4 text-xl font-semibold text-gray-800">{m.about_education_title()}</h2>
		<div class="space-y-3">
			<div class="border-l-2 border-blue-200 pl-4">
				<p class="text-sm text-gray-500">2010 - 2012</p>
				<p class="font-medium text-gray-800">{m.about_education_web_technician()}</p>
				<p class="text-gray-600">CIFACOM, Montreuil</p>
			</div>
			<div class="border-l-2 border-blue-200 pl-4">
				<p class="text-sm text-gray-500">2006 - 2009</p>
				<p class="font-medium text-gray-800">{m.about_education_business_techniques()}</p>
				<p class="text-gray-600">UIT de Roubaix, Roubaix</p>
			</div>
		</div>
	</div>

	<!-- Languages -->
	<div>
		<h2 class="mb-4 text-xl font-semibold text-gray-800">{m.about_lang_title()}</h2>
		<div class="space-y-3">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<span
						class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800"
						>FR</span
					>
				</div>
				<div class="ml-3">
					<p class="font-medium text-gray-800">{m.about_lang_french()}</p>
					<p class="text-sm text-gray-600">{m.about_lang_level_mother_tongue()}</p>
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
					<p class="font-medium text-gray-800">{m.about_lang_english()}</p>
					<p class="text-sm text-gray-600">{m.about_lang_level_fluent()}</p>
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
					<p class="font-medium text-gray-800">{m.about_lang_spanish()}</p>
					<p class="text-sm text-gray-600">{m.about_lang_level_school()}</p>
				</div>
			</div>
		</div>
	</div>
</div>
