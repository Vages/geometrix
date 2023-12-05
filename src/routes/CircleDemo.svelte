<script lang="ts">
	import { circleArea } from '$lib/index.js';

	let radius: number = 1;
	$: result = circleArea(radius);
</script>

<h3>
	<code>circleArea(radius)</code>
</h3>
<p>Regner ut arealet av en sirkel: <code>π * radius * radius</code></p>
<enhanced:img class="illustration" src="./circle.png" alt="Sirkel" />

<h4>Demo</h4>
<code>
	circleArea(
	<input type="number" bind:value={radius} /> ) ≈ {Math.round(result * 100) / 100}</code
>
