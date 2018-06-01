import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
export const routes: Routes = [
    {path: 'recipes', component: RecipesComponent, children:[
        {path: ':name', component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
]