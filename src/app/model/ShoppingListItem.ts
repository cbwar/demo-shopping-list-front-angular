import {Product} from "./Product";
import {ShoppingList} from "./ShoppingList";

export interface ShoppingListItem {
  id?: number
  product: Product
  quantity: number,
  list?: ShoppingList
}

export interface ShoppingListItemCreate {
  product: string
  quantity: number,
  list: string
}
