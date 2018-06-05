import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor(private recipeService: RecipeService){}

    onSave(){
        this.recipeService.saveRecipes()
            .subscribe((res) => console.log(res));
    }

    onFetch(){
        this.recipeService.fetchRecipes();
    }
}