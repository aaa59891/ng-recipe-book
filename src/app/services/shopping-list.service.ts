import { Ingredient } from "../models/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientSubject = new Subject<Ingredient[]>();
    currentIngredientIndexSubject = new Subject<number>();

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
        this.ingredientSubject.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach((ingredient) => {
            this._addIngredient(ingredient);
        })
        this.ingredientSubject.next(this.ingredients.slice());
    }

    getIngredient(index: number): Ingredient{
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientSubject.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientSubject.next(this.ingredients.slice());
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