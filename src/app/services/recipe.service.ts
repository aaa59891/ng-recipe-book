import { Recipe } from "../models/recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
            'Test', 
            'Test description', 
            'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg',
            [
                new Ingredient('shrimp', 5),
                new Ingredient('bread', 3)
            ]
        ),
        new Recipe(
            'Test2', 
            'Test description', 
            'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg',
            [

                new Ingredient('meat', 1),
                new Ingredient('noodles', 3)
            ]
        )
    ];

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(name: string): Recipe{
        return this.recipes[this.recipes.findIndex((recipe) => recipe.name === name)];
    }
    
}