import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { RecipeDetailEmptyComponent } from './components/recipes/recipe-detail-empty/recipe-detail-empty.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeDetailEmptyComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
