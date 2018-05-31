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
        this.ingredients.push(ingredient);
        this.ingredientsChangedEE.emit(this.ingredients);
    }
}