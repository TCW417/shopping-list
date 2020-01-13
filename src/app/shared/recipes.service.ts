import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from './ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {

  nextId = 0;

  private recipes = [
    new Recipe(this.nextId++, 'Test Recipe 1',
      'This is a test recipe. It was added to the database in the recipe-list component.',
      // tslint:disable-next-line:max-line-length
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Thyme_and_Garlic_Grilled_Salmon_with_Mango_Salsa%2C_Rosemary_Potatoes_and_Snow_Peas_%28297986190%29.jpg',
      [new Ingredient('Thick cut french bread', '6 slices'),
        new Ingredient('Eggs', '4')
      ]
    ),
    new Recipe(this.nextId++, 'French Toast',
      'Tracy\'s bacon fried french toast. Yum!',
      'https://cdn.pixabay.com/photo/2015/04/25/09/32/french-toast-738829_1280.jpg',
      [new Ingredient ('thick cut french bread', '6 slices'), new Ingredient('eggs', '4')])
  ];

  constructor(private listService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return copy of this.recipes
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  removeRecipe(recipe: Recipe) {
    const newR = this.recipes.filter(r => r.name.toLowerCase() !== recipe.name.toLowerCase());
    this.recipes = newR;
  }

  fetchRecipe(id: number) {
    return this.recipes.find((r: Recipe) => r.id === id);
  }

  sendToShoppingList(list: Ingredient[]) {
    console.log('sending these to list', list);
    this.listService.addIngredientsToList(list);
  }
}

