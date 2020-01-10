import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../../shared/recipes.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private thisRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.thisRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.fetchRecipe(+params.id);
    });
    // const myId = +this.thisRoute.snapshot.params.id;
    // this.recipe = this.recipeService.fetchRecipe(myId);
  }

  addToShoppingList() {
    this.recipeService.sendToShoppingList(this.recipe.ingredients);
  }
}
