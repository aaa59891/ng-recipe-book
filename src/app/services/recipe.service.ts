import { Recipe } from "../models/recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService{
    recipesSub = new Subject<Recipe[]>();

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

    getRecipe(index: number): Recipe{
        return this.recipes[index];
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesSub.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesSub.next(this.recipes.slice());
    }
    
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesSub.next(this.recipes.slice());
    }
}