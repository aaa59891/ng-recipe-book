import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../../models/recipe.model";
import { ShoppingListService } from "../../../services/shopping-list.service";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-detail.component.html",
    styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    constructor(
        private slService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap
            .subscribe((paramMap) => {
                this.recipe = this.recipeService.getRecipe(Number(paramMap.get('id')))
            })
    }

    toShoppingList(){
        this.slService.addIngredients(this.recipe.ingredients);
    }
}
