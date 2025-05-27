<script lang="ts">
	let screenWidth: number | null = $state(null);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<main class="flex min-h-dvh gap-2 p-2">
	<div
		class="flex w-full max-w-2xl flex-col justify-center gap-8 rounded bg-neutral-800 p-4 sm:max-w-xs"
	>
		<h1 class="text-xl font-bold uppercase">tokitoki</h1>
		<form action="" class="flex flex-col gap-8">
			<label for="username" class="flex flex-col gap-4">
				<span class="text-sm font-semibold uppercase">username</span>
				<input
					type="text"
					name="username"
					id="username"
					class="rounded bg-neutral-700 p-2 text-sm text-neutral-200 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="your username"
					required
				/>
			</label>
			<label for="email" class="flex flex-col gap-4">
				<span class="text-sm font-semibold uppercase">email</span>
				<input
					type="email"
					name="email"
					id="email"
					class="rounded bg-neutral-700 p-2 text-sm text-neutral-200 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="your email"
					required
				/>
			</label>
			<label for="password" class="flex flex-col gap-4">
				<span class="text-sm font-semibold uppercase">password</span>
				<input
					type="password"
					name="password"
					id="password"
					class="rounded bg-neutral-700 p-2 text-sm text-neutral-200 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="your email"
					required
				/>
			</label>
		</form>
	</div>
	{#if screenWidth !== null && screenWidth >= 640}
		<div class="flex-1 rounded bg-neutral-800"></div>
	{/if}
</main>
