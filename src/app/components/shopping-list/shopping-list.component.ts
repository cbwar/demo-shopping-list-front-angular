import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingList} from "../../model/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {alert, confirm} from "../../utils";
import {ShoppingListItem, ShoppingListItemCreate} from "../../model/ShoppingListItem";
import {ShoppingListItemsService} from "../../services/shopping-list-items.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  formIsVisible = false
  @Input() list: ShoppingList | undefined
  @Output() onDeleteList: EventEmitter<ShoppingList> = new EventEmitter()
  quantity: number = 1;
  productId: number = 0;

  constructor(private shoppingListService: ShoppingListService,
              private itemService: ShoppingListItemsService) {
  }

  ngOnInit(): void {
  }

  fetchList() {
    if (!this.list || !this.list.id) {
      return
    }
    this.shoppingListService.get(this.list.id).subscribe((list) => {
      this.list = list
    })
  }

  removeItem(id: number) {
    confirm('Delete', 'Delete item ?').then((result) => {
      if (result.isConfirmed) {
        if (!this.list) {
          return
        }
        this.itemService.remove(id).subscribe(() => {
          alert('Item deleted')
          this.fetchList()
        })
      }
    })
  }

  remove() {
    confirm('Delete', 'Delete list ?').then((result) => {
      if (result.isConfirmed) {
        if (!this.list) {
          return
        }
        this.onDeleteList.emit(this.list)
      }
    })

  }

  toggleForm() {
    this.formIsVisible = !this.formIsVisible
  }

  addItem() {
    if (!this.productId) {
      alert('Product is required')
      return
    }
    if (this.quantity <= 0) {
      alert('Quantity is required')
      return
    }
    if (!this.list) {
      return
    }
    const item: ShoppingListItemCreate = {
      quantity: this.quantity,
      product: `/api/products/${this.productId}`,
      list: `/api/shopping_lists/${this.list.id}`,
    }
    this.itemService.add(item).subscribe(() => {
      alert('Item added')
      this.fetchList()
      this.productId = 0
      this.quantity = 1
    })
  }
}
