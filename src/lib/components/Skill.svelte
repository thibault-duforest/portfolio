<script lang="ts">
	export let icon = '';
	export let name = '';
	export let color = '';

	const colorVariants: { [key: string]: string } = {
		blue: 'text-blue-600',
		cyan: 'text-sky-600',
		emerald: 'text-emerald-600',
		gray: 'text-gray-600',
		green: 'text-green-600',
		orange: 'text-orange-600',
		purple: 'text-purple-600',
		red: 'text-red-600',
		yellow: 'text-yellow-600'
	};
</script>

<div
	id="skill-{name}"
	class="flex-start relative flex w-[128px] flex-col items-center justify-center rounded-xl p-6"
>
	<div class={`${colorVariants[color]} mb-4 h-16 w-16`}>
		{@html icon}
	</div>

	<h3 class="mb-2 text-center text-xl font-bold tracking-wide text-gray-800">{name}</h3>

	<!-- Add particule effect WIP -->
	<!-- <div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-500"
	>
		{#each Array(8) as _, i}
			<div
				class="absolute h-2 w-2 rounded-full bg-{color}-400"
				style="
					top: {10 + Math.random() * 80}%; 
					left: {10 + Math.random() * 80}%;
					animation: particle-float-{i} 3s ease-in-out infinite;
					animation-delay: {i * 0.2}s;
				"
			></div>
		{/each}
	</div> -->
</div>

<!-- <style>
	@keyframes particle-float-0 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(10px, -15px);
		}
	}
	@keyframes particle-float-1 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-15px, -10px);
		}
	}
	@keyframes particle-float-2 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(15px, 10px);
		}
	}
	@keyframes particle-float-3 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-10px, 15px);
		}
	}
	@keyframes particle-float-4 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(5px, -20px);
		}
	}
	@keyframes particle-float-5 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-20px, -5px);
		}
	}
	@keyframes particle-float-6 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(20px, 5px);
		}
	}
	@keyframes particle-float-7 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-5px, 20px);
		}
	}
</style> -->
