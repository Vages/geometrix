<script>
	import DemoFrame from '$lib/DemoFrame.svelte';
	import RectangleDemo from './RectangleDemo.svelte';
	import TriangleDemo from './TriangleDemo.svelte';
</script>

<h1><code>geometrix</code></h1>

<p>Funksjoner for å regne ut volum, areal og omkrets av geometriske figurer.</p>

<h2>Installasjon</h2>

<p>Installer i prosjektet ditt med <code>npm install geometrix</code>.</p>

<h2>Demonstrasjon av funksjoner</h2>

<DemoFrame>
	<RectangleDemo />
</DemoFrame>
<DemoFrame>
	<TriangleDemo />
</DemoFrame>

<style>
	h1 {
		text-align: center;
	}
</style>
