import {Ingredient} from './ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  listChanged = new EventEmitter<Ingredient[]>();

  private shoppingList = [
    new Ingredient('apples', '5'),
    new Ingredient('tomato', '10')
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addToList(item: Ingredient) {
    this.shoppingList.push(item);
    this.listChanged.emit(this.shoppingList.slice());
  }

  addIngredientsToList(items: Ingredient[]) {
    console.log('adding these to list', ...items);
    this.shoppingList.push(...items);
    console.log('emitting', this.shoppingList.slice());
    this.listChanged.emit(this.shoppingList.slice());
  }

  removeFromList(item: Ingredient) {
    // const idx = this.shoppingList.findIndex(i => i.name.trim() === item.name.trim());
    const newList = this.shoppingList.filter((i: Ingredient) => i.name !== item.name);
    // this.shoppingList.splice(idx, 1);
    this.shoppingList = newList;
    this.listChanged.emit(this.shoppingList.slice());
  }
}
