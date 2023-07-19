<script lang="ts">
	import Grid, { type LayoutChangeDetail } from 'svelte-grid-extended';
	import { Store } from "tauri-plugin-store-api";

	const store = new Store(".settings.dat");

	const items = [
		{id: '0', x: 0, y: 0, w: 2, h: 1},
		{id: '2', x: 2, y: 0, w: 1, h: 1},
		{id: '1', x: 3, y: 0, w: 1, h: 1},
		{id: '8', x: 0, y: 1, w: 1, h: 1},
		{id: '6', x: 1, y: 1, w: 1, h: 1},
		{id: '3', x: 2, y: 1, w: 2, h: 2},
		{id: '4', x: 0, y: 2, w: 1, h: 1},
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


	// store.set("itemsLayout", { value: [itemDefault] });

	// const items = store.get("itemsLayout");

	const itemSize = { height: 100, width: 100 };

	function handleGridChange(event: CustomEvent<LayoutChangeDetail>) {
		console.log(event.detail.item);
	}


</script>
<main>

	<Grid
		{items}
		class="grid-container"
		itemClass="grid-item"
		gap={20}
		itemActiveClass="grid-item-active"
		itemPreviewClass="bg-red-500 rounded"
		{itemSize} let:item
		on:change={handleGridChange}>
		<a href="/"><div>{item.id}</div></a>
	</Grid>
</main>

<style>
	:global(body){
		margin: 0;
		padding: 0;
	}

	main{
		display: flex;
		padding: 100px;
		width: 100%;
		height: 100%;
	}

	:global(.grid-container) {
		opacity: 1;
	}

	:global(.grid-item) {
		transition: width 4s, height 4s;
		transition: transform 4s;
		background-color: rgb(188, 188, 188);
	}

	:global(.grid-item-active) {
		opacity: 0.5;
	}

	/* tailwind classes */
	:global(.bg-red-500) {
		background-color: rgb(171, 171, 171);
	}

	:global(.rounded) {
		border-radius: 0.25rem;
	}
</style>