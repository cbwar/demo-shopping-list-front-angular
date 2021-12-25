import {Injectable} from '@angular/core';
import {Product} from "../model/Product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.BACKEND_API_URL + '/products'

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl + '.json')
  }
}
