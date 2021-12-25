import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingList} from "../../model/ShoppingList";

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  lists: ShoppingList[] = []

  constructor(private service: ShoppingListService) {
  }

  ngOnInit(): void {
    this.fetchLists()
  }

  fetchLists() {
    this.service.getLists().subscribe((lists) => {
      this.lists = lists
    })
  }

  addList() {
    console.log('add list clicked')
  }
}
