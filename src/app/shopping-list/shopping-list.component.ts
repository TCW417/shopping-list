import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  list: Ingredient[];

  constructor(private listService: ShoppingListService) {
    this.listService.listChanged.subscribe((newList: Ingredient[]) => {
      console.log('s l received new list:', newList);
      this.list = newList;
    });
  }

  ngOnInit() {
    this.list = this.listService.getShoppingList();
  }

  onListEdit(e) {
    console.log(JSON.stringify(e, null, 2));
    switch (e.action) {
      case 'add':
        this.listService.addToList(e.item);
        break;
      case 'delete':
        this.listService.removeFromList(e.item);
        break;
      default:
        break;
    }
  }
}
