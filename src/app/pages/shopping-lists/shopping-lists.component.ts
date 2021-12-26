import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingList} from "../../model/ShoppingList";
import {alert} from "../../utils";
import {ShoppingListItem} from "../../model/ShoppingListItem";
import {ShoppingListItemsService} from "../../services/shopping-list-items.service";

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  formIsVisible = false
  lists: ShoppingList[] = []

  constructor(private service: ShoppingListService, private itemService: ShoppingListItemsService) {
  }

  ngOnInit(): void {
    this.fetchLists()
  }

  fetchLists() {
    this.service.all().subscribe((lists) => {
      this.lists = lists
    })
  }

  addList(list: ShoppingList) {
    console.log('add list clicked')
    console.log(list)
    this.service.add(list).subscribe(() => {
      alert('List added successfully')
      this.toggleForm()
      this.fetchLists()
    })
  }

  removeList(list: ShoppingList) {
    this.service.remove(list).subscribe(() => {
      alert('List deleted successfully')
      this.fetchLists()
    })
  }

  toggleForm() {
    this.formIsVisible = !this.formIsVisible
  }
}
