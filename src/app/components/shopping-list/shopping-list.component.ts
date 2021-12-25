import {Component, Input, OnInit} from '@angular/core';
import {ShoppingList} from "../../model/ShoppingList";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() list: ShoppingList|undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}
