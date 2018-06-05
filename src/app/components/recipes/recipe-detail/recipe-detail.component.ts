import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../../models/recipe.model";
import { ShoppingListService } from "../../../services/shopping-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-detail.component.html",
    styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number = -1;
    constructor(
        private slService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap
            .subscribe((paramMap) => {
                const id = paramMap.get('id');
                if(!id || isNaN(parseInt(id))){
                    return;
                }
                this.id = parseInt(id);
                this.recipe = this.recipeService.getRecipe(this.id)
            })
    }

    toShoppingList(){
        this.slService.addIngredients(this.recipe.ingredients);
    }

    onDelete(){
        if(this.id === -1){
            return;
        }
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}
