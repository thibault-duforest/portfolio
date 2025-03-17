<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import { i18n } from '$lib/i18n';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="m-auto flex h-screen max-w-7xl flex-col md:flex-row">
		<div class="h-15 w-full overflow-hidden bg-gray-800 p-4 text-white md:h-auto md:w-52">
			<Nav />
		</div>

		<main class="flex-1 overflow-auto p-4">
			{@render children()}
		</main>
	</div>
</ParaglideJS>
