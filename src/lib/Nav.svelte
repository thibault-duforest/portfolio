<script lang="ts">
	import { page } from '$app/state';
</script>

<nav>
    <ul class="flex md:block space-x-4 md:space-x-0 md:space-y-4">
        {#snippet navLink(href: string, label: string, title: string)}
            <li>
                <a {href} {title} class="hover:text-gray-300" class:active={page.url.pathname === href}>{label}</a>
            </li>
        {/snippet}

        {@render navLink('/', 'Welcome!', 'Return to homepage')}
        {@render navLink('/about', 'About me', 'Learn more about my profile')}
        {@render navLink('/portfolio', 'Portfolio', 'Look at Thibault Duforest\' realisations')}
        {@render navLink('/contact', 'Contact me', 'Show contact information')}
    </ul>
</nav>
