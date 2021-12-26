import {Injectable} from '@angular/core';
import {ShoppingList} from "../model/ShoppingList";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ShoppingListItemsService} from "./shopping-list-items.service";
import {ShoppingListItem} from "../model/ShoppingListItem";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private apiUrl = environment.BACKEND_API_URL + '/shopping_lists'

  constructor(private http: HttpClient, private listItemService: ShoppingListItemsService) {
  }

  get(id: number) {
    return this.http.get<ShoppingList>(`${this.apiUrl}/${id}.json`)
  }

  all() {
    return this.http.get<ShoppingList[]>(`${this.apiUrl}.json`)
  }

  remove(list: ShoppingList) {
    return this.http.delete(`${this.apiUrl}/${list.id}.json`)
  }

  add(list: ShoppingList) {
    return this.http.post(`${this.apiUrl}`, list)
  }

}
