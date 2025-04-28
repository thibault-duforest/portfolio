<script>
	import Skill from '$lib/components/Skill.svelte';
	import { skillsData } from '$lib/data/skills.js';
	import * as m from '$lib/paraglide/messages.js';
	import Email from '$lib/assets/svg/email.svg?component';
	import SocialLinkedin from '$lib/assets/svg/social-linkedin.svg?component';
	import SocialGithub from '$lib/assets/svg/social-github.svg?component';
	import ExternalLink from '$lib/assets/svg/external-link.svg?component';

	export let data;
</script>

<section class="flex flex-col items-center pb-4 md:flex-row md:pb-8">
	<div class="mb-8 h-48 w-48 flex-shrink-0 md:mr-12 md:mb-0 md:h-64 md:w-64">
		<div
			class="h-full w-full overflow-hidden rounded-full border-4 border-white bg-blue-100 shadow-lg"
		>
			<enhanced:img
				src={data.profile.picture}
				alt="Thibault Duforest"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>

	<div>
		<div class="flex flex-wrap items-baseline">
			<h1 class="mr-4 text-3xl font-bold text-gray-800 md:text-4xl">{data.profile.name}</h1>
			<span class="text-blue my-4 rounded-full bg-blue-100 px-3 py-1 text-xl font-medium md:my-0">
				{data.profile.status}
			</span>
		</div>
		<div class="my-2 text-2xl text-gray-600">
			<h2 class="inline-block">{data.profile.title}</h2>
			<span> - </span>
			<p class="block sm:inline-block">{data.profile.experience}</p>
		</div>
		<div class="flex items-center">
			<div class="mr-2 rounded-full">
				<Email class="h-6 w-6 text-blue-600" />
			</div>
			<div>
				<a
					href={`mailto:${data.profile.email}`}
					class="text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
					>{data.profile.email}</a
				>
			</div>
		</div>

		<p class="mt-6 max-w-2xl text-lg text-gray-700">
			{m.home_profile_description()}
		</p>

		<div class="mt-8 flex flex-wrap space-x-4">
			<a
				href={`https://${data.profile.social.linkedin}`}
				target="_blank"
				rel="noopener noreferrer"
				class="mb-4 flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
			>
				<SocialLinkedin class="mr-2 h-5 w-5" />
				LinkedIn
				<ExternalLink class="ml-2 h-5 w-5" />
			</a>
			<a
				href={`https://${data.profile.social.github}`}
				target="_blank"
				rel="noopener noreferrer"
				class="mb-4 flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
			>
				<SocialGithub class="mr-2 h-5 w-5" />
				GitHub
				<ExternalLink class="ml-2 h-5 w-5" />
			</a>
			<a
				href={`https://${data.profile.social.github}/portfolio`}
				target="_blank"
				rel="noopener noreferrer"
				class="mb-4 flex items-center rounded-lg bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
			>
				<SocialGithub class="mr-2 h-5 w-5" />
				{m.home_portfolio_github_link_label()}
				<ExternalLink class="ml-2 h-5 w-5" />
			</a>
		</div>
	</div>
</section>

<section class="inline-block py-4 text-center xl:pl-[306px] xl:text-left">
	{#each skillsData as skillCategory}
		<div class="mb-4">
			<h2 class="text-left text-2xl font-bold">{skillCategory.name}</h2>
			<div class="flex flex-wrap items-start justify-evenly gap-6 sm:justify-start">
				{#each skillCategory.skills as skill}
					{@const { icon, name, color } = skill}
					<Skill {icon} {color} {name} />
				{/each}
			</div>
		</div>
	{/each}
</section>

<section class="py-16 text-center">
	<h2 class="mb-4 text-3xl font-bold text-gray-800">
		{m.home_contact_title()}
	</h2>
	<p class="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
		{m.home_contact_content()}
	</p>
	<a
		href="mailto:{data.profile.email}"
		class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
	>
		{m.home_contact_cta()}
	</a>
</section>
