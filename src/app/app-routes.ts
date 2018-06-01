import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailEmptyComponent } from './components/recipes/recipe-detail-empty/recipe-detail-empty.component';
export const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeDetailEmptyComponent},
        {path: ':name', component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
]