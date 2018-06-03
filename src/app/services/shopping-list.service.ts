import { Ingredient } from "../models/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientSubject = new Subject<Ingredient[]>()
    ingredientsChangedEE = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this._addIngredient(ingredient);
        this.ingredientSubject.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach((ingredient) => {
            this._addIngredient(ingredient);
        })
        this.ingredientSubject.next(this.ingredients);
    }

    private _addIngredient(ingredient: Ingredient){
        const index = this.ingredients.map((ing) => ing.name).indexOf(ingredient.name);
        if(index === -1){
            this.ingredients.push(ingredient);
        }else{
            this.ingredients[index].amount += ingredient.amount;
        }
    }
}