import { Recipe } from './../../../models/recipe.model';
import { Component, OnInit } from "@angular/core";
import { RecipeService } from '../../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[]
    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    onSelect(recipe: Recipe){
        this.router.navigate([recipe.name], {relativeTo: this.route});
    }
}