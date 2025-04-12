<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
</script>

<nav>
	<ul class="flex space-x-4 lg:block lg:space-y-4 lg:space-x-0">
		{#snippet navLink(href: string, label: string, title: string)}
			<li>
				<a {href} {title} class="hover:text-gray-300" class:active={page.url.pathname === href}
					>{label}</a
				>
			</li>
		{/snippet}

		{@render navLink(`${base}/`, 'Bienvenue !', "Retourner à la page d'accueil")}
		{@render navLink(`${base}/about`, 'A propos de moi', 'Découvrez le détail de mon profile')}
		{@render navLink(`${base}/projects`, 'Portfolio', 'Afficher mes realisations')}
	</ul>
</nav>
