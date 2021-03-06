import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailEmptyComponent } from './components/recipes/recipe-detail-empty/recipe-detail-empty.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './components/auth/signup/signup.component';
export const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeDetailEmptyComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
]