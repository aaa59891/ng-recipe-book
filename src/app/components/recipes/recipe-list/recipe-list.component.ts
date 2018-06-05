import { Recipe } from './../../../models/recipe.model';
import { Component, OnInit } from "@angular/core";
import { RecipeService } from '../../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutoUnsubscribe } from '../../../abstracts/AutoUnsubscribe';

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent extends AutoUnsubscribe implements OnInit {
    recipes: Recipe[]
    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super()
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.subscriptions.push(
            this.recipeService.recipesSub.subscribe((recipes) => this.recipes = recipes)
        );
    }
}