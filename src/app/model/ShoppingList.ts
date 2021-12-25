import {Moment} from "moment";
import {ShoppingListItem} from "./ShoppingListItem";

export interface ShoppingList {
  id?: number
  name?: string
  createdAt?: Moment
  items: Array<ShoppingListItem>
}
