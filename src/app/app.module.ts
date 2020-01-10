import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shared/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { PickARecipeComponent } from './recipes/pick-a-recipe/pick-a-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective,
    PickARecipeComponent,
    RecipeEditComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
