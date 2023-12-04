<script lang="ts">
	import { triangleArea } from '$lib/index.js';

	let width: number = 1;
	let height: number = 1;
	$: result = triangleArea(width, height);
</script>

<h3>
	<code>triangleArea(width, height)</code>
</h3>

<p>Regner ut arealet av en trekant: <code>width * height / 2</code></p>
<h4>Demo</h4>
<code>
	triangleArea(
	<input type="number" bind:value={width} />,
	<input type="number" bind:value={height} />
	) = {result}</code
>
