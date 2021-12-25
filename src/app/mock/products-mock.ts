import {Product} from "../model/Product";
import {getRandomInt} from "./utils";

function getItems() {
  let items:Product[] = []
  for (let i = 1; i <= getRandomInt(10, 30); i++) {
    items.push({
      id: i,
      name: `Product ${i}`
    })
  }
  return items
}

export const PRODUCTS: Product[] = getItems()
