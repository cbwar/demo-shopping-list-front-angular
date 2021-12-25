import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {alert} from "../../utils";
import {ShoppingList} from "../../model/ShoppingList";

@Component({
  selector: 'app-add-shopping-list-form',
  templateUrl: './add-shopping-list-form.component.html',
  styleUrls: ['./add-shopping-list-form.component.scss']
})
export class AddShoppingListFormComponent implements OnInit {

  @Output() onSubmit: EventEmitter<ShoppingList> = new EventEmitter<ShoppingList>()
  @Output() onClose = new EventEmitter()
  name: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.name === '') {
      alert('Name is required', 'error')
      return
    }
    const list: ShoppingList = {
      name: this.name,
      items: []
    }
    this.onSubmit.emit(list)
    this.name = ''
  }
}
