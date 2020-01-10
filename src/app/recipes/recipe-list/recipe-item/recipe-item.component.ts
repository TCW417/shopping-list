import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../../shared/recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onRecipeSelected(id: number) {
    // console.log('item emitting', JSON.stringify(this.recipe, null, 2));
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipes', 'detail', id]);
  }
}
