declare module "svelte-grid" {
    import type { SvelteComponentTyped } from "svelte";
  
    export interface Size {
      w: number;
      h: number;
    }
  
    export interface Positon {
      x: number;
      y: number;
    }
  
    interface ItemLayout extends Size, Positon {
      fixed?: boolean;
      resizable?: boolean;
      draggable?: boolean;
      customDragger?: boolean;
      customResizer?: boolean;
      min?: Size;
      max?: Size;
      id?: string;
    }
  
    export type Item<T> = T & { [width: number]: ItemLayout };
    export type FilledItem<T> = T & { [width: number]: Required<ItemLayout> };
  
    export interface Props<T> {
      fillSpace?: boolean;
      items: FilledItem[];
      rowHeight: number;
      cols: number[][];
      gap?: [number, number];
      fastStart?: boolean;
      throttleUpdate?: number;
      throttleResize?: number;
      id?: string;
  
      scroller?: undefined;
      sensor?: number;
    }
  
    export interface Slots<T> {
      default: { item: ItemLayout, dataItem: Item<T> };
    }
  
    export default class Grid<T = {}> extends SvelteComponentTyped<Props<T>, {}, Slots<T>> {}
  }
  
  declare module "svelte-grid/build/helper/index.mjs" {
    import { ItemLayout } from "svelte-grid";
  
    const x: {
      normalize(items: any[], col: any): unknown[],
      adjust(items: any[], col: any): unknown[],
      findSpace(item: any, items: any, cols: any): unknown,
  
      item<T>(obj: ItemLayout): Required<ItemLayout>,
    };
  
    export default x;
  }