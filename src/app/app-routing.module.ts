import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {PickARecipeComponent} from './recipes/pick-a-recipe/pick-a-recipe.component';
import {RecipeNewComponent} from './recipes/recipe-new/recipe-new.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', pathMatch: 'full', component: PickARecipeComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/recipes' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
