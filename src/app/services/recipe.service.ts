import { Recipe } from "../models/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{
    recipeSelectedEE = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test', 'Test description', 'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg'),
        new Recipe('Test2', 'Test description', 'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg')
    ];

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }
    
}