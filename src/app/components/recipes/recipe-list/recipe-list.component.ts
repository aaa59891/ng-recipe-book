import { Recipe } from './../../../models/recipe.model';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Test', 'Test description', 'http://1.bp.blogspot.com/_cP3Pd1BRVXc/R1g9Icp9R9I/AAAAAAAACME/KItpcxCgRHg/s400/peppermint+cookies+R.jpg')
    ];
    constructor() {}

    ngOnInit() {}
}
