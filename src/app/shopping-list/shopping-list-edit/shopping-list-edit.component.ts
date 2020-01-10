import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  // @Input() theList: Ingredient[];
  // @Output() editList = new EventEmitter<{ action: string, item: Ingredient}>();
  @ViewChild('inputName', {static: true}) itemName: ElementRef;
  @ViewChild('inputAmount', {static: true}) itemAmount: ElementRef;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.itemName.nativeElement.value;
    const amount = this.itemAmount.nativeElement.value;
    this.listService.addToList(new Ingredient(name, amount));
    this.onClear();
  }

  onDeleteItem() {
    const name = this.itemName.nativeElement.value;
    const amount = this.itemAmount.nativeElement.value;
    this.listService.removeFromList(new Ingredient(name, amount));
    this.onClear();
  }

  onClear() {
    this.itemName.nativeElement.value = '';
    this.itemAmount.nativeElement.value = null;
  }
}
