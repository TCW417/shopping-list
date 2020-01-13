import {Subject} from 'rxjs';

import {Ingredient} from './ingredient.model';

export class ShoppingListService {
  listChanged = new Subject<Ingredient[]>();

  private shoppingList = [
    new Ingredient('apples', '5'),
    new Ingredient('tomato', '10')
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addToList(item: Ingredient) {
    this.shoppingList.push(item);
    this.listChanged.next(this.shoppingList.slice());
  }

  addIngredientsToList(items: Ingredient[]) {
    console.log('adding these to list', ...items);
    this.shoppingList.push(...items);
    console.log('emitting', this.shoppingList.slice());
    this.listChanged.next(this.shoppingList.slice());
  }

  removeFromList(item: Ingredient) {
    // const idx = this.shoppingList.findIndex(i => i.name.trim() === item.name.trim());
    const newList = this.shoppingList.filter((i: Ingredient) => i.name !== item.name);
    // this.shoppingList.splice(idx, 1);
    this.shoppingList = newList;
    this.listChanged.next(this.shoppingList.slice());
  }
}
