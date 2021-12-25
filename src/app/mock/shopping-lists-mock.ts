import {ShoppingList} from "../model/ShoppingList";
import {PRODUCTS} from "./products-mock";
import {Product} from "../model/Product";
import {getRandomInt, getRandomItem} from "./utils";
import * as moment from "moment";

function getItems() {
  let items: ShoppingList[] = []
  let counter = 1;
  for (let i = 1; i <= 4; i++) {
    let item: ShoppingList = {
      id: i,
      name: `My list #${i}`,
      createdAt: moment(),
      items: []
    }
    for (let j = 1; j <= getRandomInt(1, 15); j++) {
        item.items.push({
          id: counter++,
          product: getRandomItem<Product>(PRODUCTS),
          quantity: getRandomInt(1, 3)
        })
    }
    items.push(item)
  }
  return items
}

export const SHOPPINGLISTS: ShoppingList[] = getItems()
