import {Component, Input, OnInit} from '@angular/core';
import {ShoppingList} from "../../model/ShoppingList";
import {ShoppingListService} from "../../services/shopping-list.service";
import {confirm} from "../../utils";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() list: ShoppingList | undefined

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  fetchList() {
    if (!this.list || !this.list.id) {
      return
    }
    this.shoppingListService.getList(this.list.id).subscribe((list) => {
      this.list = list
    })
  }

  removeItem(id: number) {
    confirm('Delete', 'Delete item ?').then((result) => {
      if (result.isConfirmed) {
        if (!this.list) {
          return
        }
        this.shoppingListService.removeItem(this.list, id).subscribe(() => {
          console.log('Deleted ' + id)
          this.fetchList()
        })
      }
    })

  }
}
