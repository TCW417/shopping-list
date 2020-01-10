import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // @Output() navSelection = new EventEmitter<string>();
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  // onRecipes() {
  //   console.log('page selected: Recipes');
  //   this.navSelection.emit('recipes');
  // }

  // onShoppingList() {
  //   console.log('page selected: Shopping List');
  //   this.navSelection.emit('shopping');
  // }

  navLog(msg) {
    console.log('navLog: '+msg);
  }
}
