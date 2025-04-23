<script lang="ts">
	import { writable } from 'svelte/store';

	import { getLocale, setLocale } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';
	import { Lang } from '$lib/types/localisation';
	import FlagEN from '$lib/assets/svg/flag-en.svg?component';
	import FlagFR from '$lib/assets/svg/flag-fr.svg?component';

	const language = writable(getLocale());

	function switchLanguage(lang: Lang) {
		language.set(lang);
		setLocale(lang);
	}
</script>

{#if $language !== Lang.FR}
	<button
		on:click={() => switchLanguage(Lang.FR)}
		class="p-2 hover:cursor-pointer focus-visible:outline focus-visible:outline-white"
	>
		<FlagFR />
		<span class="sr-only">{m.language_switcher_french()}</span>
	</button>
{/if}
{#if $language !== Lang.EN}
	<button
		on:click={() => switchLanguage(Lang.EN)}
		class="p-2 hover:cursor-pointer focus-visible:outline focus-visible:outline-white"
	>
		<FlagEN />
		<span class="sr-only">{m.language_switcher_english()}</span>
	</button>
{/if}
