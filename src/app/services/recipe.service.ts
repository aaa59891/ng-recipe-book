import { Recipe } from "../models/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Subject, Observable } from "rxjs";
import { Http } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable()
export class RecipeService{
    constructor(
        private http: Http,
        private router: Router
    ){}

    private url = 'https://ng-recipe-book-d8767.firebaseio.com/recipes.json';
    recipesSub = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // new Recipe(
        //     'Test', 
        //     'Test description', 
        //     'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg',
        //     [
        //         new Ingredient('shrimp', 5),
        //         new Ingredient('bread', 3)
        //     ]
        // ),
        // new Recipe(
        //     'Test2', 
        //     'Test description', 
        //     'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg',
        //     [

        //         new Ingredient('meat', 1),
        //         new Ingredient('noodles', 3)
        //     ]
        // )
    ];

    fetchRecipes(){
        this.http.get(this.url)
            .pipe<Recipe[]>(
                map((res) => {
                    return Recipe.createRecipes(res.json());
                })
            )
            .subscribe((recipes) => {
                this.recipes = recipes;
                this.recipesSub.next(this.recipes.slice());
            });
    }

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe{
        if(index >= this.recipes.length){
            this.router.navigate(['/recipes']);
            return null;
        }
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

    saveRecipes(){
        return this.http.put(this.url, this.recipes)
            .pipe(
                map((res) => res.json())
            );
    }
}