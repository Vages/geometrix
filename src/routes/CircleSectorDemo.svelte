<script lang="ts">
	import { circleSectorArea } from '$lib/index.js';

	let radius: number = 1;
	let degrees: number = 360;
	$: result = circleSectorArea(radius, degrees);
</script>

<h3>
	<code>circleArea(radius, degrees)</code>
</h3>
<p>Regner ut arealet av en sirkel: <code>π * radius * radius * degrees / 360</code></p>
<enhanced:img class="illustration" src="./circle-sector.png" alt="Sirkel-sektor" />

<h4>Demo</h4>
<code>
	circleArea(
	<input type="number" bind:value={radius} />,
	<input type="number" bind:value={degrees} />
	) ≈ {Math.round(result * 100) / 100}</code
>
