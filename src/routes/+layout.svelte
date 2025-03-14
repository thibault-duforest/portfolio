<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import { i18n } from '$lib/i18n';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="max-w-7xl m-auto flex flex-col md:flex-row h-screen">
		<div class="w-full md:w-52 bg-gray-800 text-white p-4 md:h-auto h-15 overflow-hidden">
			<Nav />
		</div>
	
		<main class="flex-1 p-4 overflow-auto">
			{@render children()}
		</main>
	</div>
</ParaglideJS>
