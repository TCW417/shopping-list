import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editing = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeSvc: RecipeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id

    if (id >= 0) {
      this.recipe = this.recipeSvc.fetchRecipe(id);
      this.editing = true;
    } else {
      this.editing = false;
    }
  }

  onSaveRecipe() {
    // do something useful
    this.router.navigate(['/recipes']);
  }
}
