import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from '../shared/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  list: Ingredient[];
  listChangedSub: Subscription;

  constructor(private listService: ShoppingListService) {
    this.listChangedSub = this.listService.listChanged.subscribe((newList: Ingredient[]) => {
      console.log('s l received new list:', newList);
      this.list = newList;
    });
  }

  ngOnInit() {
    this.list = this.listService.getShoppingList();
  }

  ngOnDestroy(): void {
    this.listChangedSub.unsubscribe();
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
