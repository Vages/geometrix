<script lang="ts">
	import { trapezoidArea } from '$lib/index.js';

	let topWidth: number = 1;
	let bottomWidth: number = 1;
	let height: number = 1;
	$: result = trapezoidArea(topWidth, bottomWidth, height);
</script>

<h3>
	<code>trapezoidArea(topWidth, bottomWidth, height)</code>
</h3>
<p>Regner ut arealet av et trapes: <code>(topWidth + bottomWidth) * height / 2</code></p>
<enhanced:img src="./trapezoid.png" alt="Trapes" />

<h4>Demo</h4>
<code>
	trapezoidArea(
	<input type="number" bind:value={topWidth} />,
	<input type="number" bind:value={bottomWidth} />,
	<input type="number" bind:value={height} />
	) = {result}</code
>

<style>
	img {
		height: 4rem;
		width: auto;
	}
</style>
