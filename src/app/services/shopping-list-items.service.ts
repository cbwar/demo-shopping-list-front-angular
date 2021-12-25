import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemsService {

  private apiUrl = environment.BACKEND_API_URL + '/shopping_list_items'

  constructor(private http: HttpClient) {
  }

  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
