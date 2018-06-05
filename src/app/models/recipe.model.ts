import { Ingredient } from "./ingredient.model";

export class Recipe {
    static createRecipe(obj: any): Recipe{
        return new Recipe(
            obj['name'],
            obj['description'],
            obj['imagePath'],
            obj['ingredients'] || [],
        )
    }

    static createRecipes(obj: any[]):Recipe[]{
        if(!obj || obj.length === 0){
            return [];
        }
        return obj.map(Recipe.createRecipe);
    }
    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: Ingredient[]
    ) {}
}
