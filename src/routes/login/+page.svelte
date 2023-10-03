<!-- <script lang="ts">
	import { Grid, gridHelp } from '$lib/js/svelte-grid';

// Define the interface for the grid item
interface GridItem {
  x: number;
  y: number;
  w: number;
  h: number;
  draggable: boolean;
  resizable: boolean;
  fixed: boolean;
  id: string;
}

// Function to generate a random id
const id = (): string => '_' + Math.random().toString(36).substr(2, 9);

// Define the type for the "items" array
interface Item {
  6: GridItem;
  id: string;
}

// Initial items data
let items: Item[] = [
  {
    6: gridHelp.item({
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      draggable: false,
      resizable: false,
      fixed: false,
    }),
    
  },

  {
    6: gridHelp.item({
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      fixed: false,
      resizable: false,
      draggable: false,
    }),
    id: id(),
  },
];

// Function to enable/disable grid item properties
const enable = (enableItem: boolean): void => {
  items = items.reduce((acc: Item[], value: Item) => {
    acc.push({
      ...value,
      [6]: {
        ...value[6],
        fixed: !enableItem,
        resizable: enableItem,
        draggable: enableItem,
      },
    });
    return acc;
  }, []);
};

let toggle: boolean = false;

// Click event handler
const onClick = (): void => {
  toggle = !toggle;
  enable(toggle);
};

// Define the type for the "cols" array
type Col = [number, number];
const cols: Col[] = [[1100, 6]];


</script>

<button on:click={onClick}>
	{!toggle ? 'Enable' : 'Disable'}
</button>



<div class=demo-container>
	<Grid bind:items={items} rowHeight={100} let:dataItem {cols}>
	  <div class=demo-widget>
		{dataItem.id}
	  </div>
	</Grid>
	</div>
<style>
	.demo-widget {
		background: #f1f1f1;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.demo-container {
		max-width: 800px;
		width: 100%;
	}
</style> -->
