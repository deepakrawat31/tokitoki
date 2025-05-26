<script lang="ts">
	let screenWidth: number | null = $state(null);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<main class="flex min-h-dvh gap-2 p-2">
	<div
		class="flex w-full max-w-2xl flex-col justify-center gap-8 rounded bg-neutral-800 p-4 sm:max-w-xs"
	>
		<h1 class="text-xl font-bold uppercase">tokitoki</h1>
		<form action="" class="flex flex-col gap-8"></form>
	</div>
	{#if screenWidth !== null && screenWidth >= 640}
		<div class="flex-1 rounded bg-neutral-800"></div>
	{/if}
</main>
