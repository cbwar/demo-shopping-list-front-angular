import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent implements OnInit {
  @Input() selectedId: number = 0;
  @Output() onChange = new EventEmitter()
  products: Product[] = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.service.getProducts().subscribe(products => {
      this.products = products
    })
  }

  change() {
    console.log(this.selectedId)
    this.onChange.emit(this.selectedId)
  }
}
