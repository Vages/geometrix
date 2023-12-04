<script lang="ts">
	import { rectangleArea } from '$lib/index.js';

	let width: number = 1;
	let height: number = 1;
	$: result = rectangleArea(width, height);
</script>

<h3>
	<code>rectangleArea(width, height)</code>
</h3>
<p>Regner ut arealet av et rektangel: <code>width * height</code></p>
<enhanced:img class="illustration" src="./rectangle.png" alt="Rektangel" />

<h4>Demo</h4>
<code>
	rectangleArea(
	<input type="number" bind:value={width} />,
	<input type="number" bind:value={height} />
	) = {result}</code
>
