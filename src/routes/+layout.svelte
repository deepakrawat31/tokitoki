<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>TokiToki</title>
</svelte:head>

{@render children()}
