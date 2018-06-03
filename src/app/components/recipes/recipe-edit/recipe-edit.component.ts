import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../models/recipe.model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";

@Component({
    selector: "app-recipe-edit",
    templateUrl: "./recipe-edit.component.html",
    styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
    recipe: Recipe;
    editMode = false;
    constructor(
      private route: ActivatedRoute,
      private recipeService: RecipeService
    ) {}

    ngOnInit() {
      this.route.paramMap
        .subscribe((paramMap) => {
          const id = paramMap.get('id');
          this.editMode = id !== null;
          if(id){
            this.recipe = this.recipeService.getRecipe(Number(paramMap.get('id')));
          }
        })
    }
}
