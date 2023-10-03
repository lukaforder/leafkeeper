<script lang="ts">
	import Grid, { GridItem } from 'svelte-grid-extended';

	const items = [
		{id: '0', x: 0, y: 0, w: 2, h: 1, type: "bookmark", target: "/", color: "#fff", icon: "defaultPlant"},
		{id: '2', x: 2, y: 0, w: 1, h: 1, type: "bookmark", target: "/"},
		{id: '1', x: 3, y: 0, w: 1, h: 1, type: "bookmark", target: "/"},
		{id: '8', x: 0, y: 1, w: 1, h: 1, type: "home", target: "/"},
		{id: '6', x: 1, y: 1, w: 1, h: 1, type: "plants", target: "/"},
		{id: '3', x: 2, y: 1, w: 2, h: 2, type: "weather", target: "/"},
		{id: '4', x: 0, y: 2, w: 1, h: 1, type: "alerts", target: "/"},
		{id: '7', x: 1, y: 2, w: 1, h: 1},
		{id: '5', x: 0, y: 4, w: 1, h: 1},
		{id: '18', x: 5, y: 0, w: 1, h: 1},
		{id: '17', x: 6, y: 0, w: 1, h: 1},
		{id: '16', x: 7, y: 0, w: 1, h: 1},
		{id: '10', x: 5, y: 1, w: 2, h: 1},
		{id: '15', x: 7, y: 1, w: 1, h: 1},
		{id: '9', x: 5, y: 2, w: 2, h: 1},
		{id: '14', x: 7, y: 2, w: 1, h: 1},
		{id: '11', x: 6, y: 4, w: 2, h: 1},
		{id: '12', x: 3, y: 4, w: 2, h: 1},
		{id: '13', x: 1, y: 4, w: 2, h: 1}
	];

	const itemSize = {width: 100, height: 100};

</script>
<body>
<Grid {itemSize} class="grid-container" rows={6} collision="none">
	{#each items as item}
		<GridItem
			x={item.x}
			y={item.y}
			w={item.w}
			h={item.h}
			class="grid-item"
			activeClass="grid-item-active"
			previewClass="bg-green-500 rounded"
		>
			<div class="item"><span>{item.id}</span></div>
		</GridItem>
	{/each}
</Grid>
</body>
<style>
	span{
		color:white;
	}

	body{
		width: 100%;
		height: 100%;
		overflow-y: hidden;
		padding-top: 5em;
		padding-left: 5em;
		background-image: url($lib/img/themes/pixel/ExK_p7wVoAg_Rij.png);
	}

	.item {
		display: grid;
		place-items: center;
		/* background-image: url($lib/img/themes/pixel/5405bf0b02e44e0.png);
		background-repeat: repeat;
		background-size: 100px;
		background-attachment: fixed; */
		background-color: rgba(71, 71, 71, 0.3);
    	backdrop-filter: blur(10px);
		width: 100%;
		height: 100%;
	}

	:global(.grid-container) {

	}

	:global(.grid-item) {

	}

	:global(.grid-item-active) {
		background-color: rgba(0, 0, 0, 0.3);
    	backdrop-filter: blur(10px);
		z-index: 999;
	}

	/* tailwind classes */
	:global(.bg-green-500) {
		background-color: rgb(33, 202, 33);
	}

	:global(.rounded) {
		border-radius: 0.25rem;
	}
</style>
