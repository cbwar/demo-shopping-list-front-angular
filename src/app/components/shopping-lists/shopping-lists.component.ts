import {Component, OnInit} from '@angular/core';
import {SHOPPINGLISTS} from "../../mock/shopping-lists-mock";

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  lists = SHOPPINGLISTS

  constructor() {
  }

  ngOnInit(): void {
  }

}
