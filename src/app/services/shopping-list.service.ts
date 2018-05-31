import { Ingredient } from "../models/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
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
        this.ingredientsChangedEE.emit(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach((ingredient) => {
            this._addIngredient(ingredient);
        })
        this.ingredientsChangedEE.emit(this.ingredients);
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