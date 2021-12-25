import {Injectable} from '@angular/core';
import {ShoppingList} from "../model/ShoppingList";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ShoppingListItemsService} from "./shopping-list-items.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private apiUrl = environment.BACKEND_API_URL + '/shopping_lists'

  constructor(private http: HttpClient, private listItemService: ShoppingListItemsService) {
  }

  getList(id: number) {
    return this.http.get<ShoppingList>(`${this.apiUrl}/${id}.json`)
  }

  getLists() {
    return this.http.get<ShoppingList[]>(`${this.apiUrl}.json`)
  }

  removeItem(list: ShoppingList, itemId: number) {
    return this.listItemService.remove(itemId)
  }

  remove(list: ShoppingList) {
    return this.http.delete(`${this.apiUrl}/${list.id}.json`)
  }

  addList(list: ShoppingList) {
    return this.http.post(`${this.apiUrl}`, list)
  }
}
