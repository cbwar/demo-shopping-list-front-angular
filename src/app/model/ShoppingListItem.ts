import {Product} from "./Product";

export interface ShoppingListItem {
  id?: number
  product: Product
  quantity: number
}
