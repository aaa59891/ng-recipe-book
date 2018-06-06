import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./services/recipe.service";
import * as firebase from "firebase";
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.recipeService.fetchRecipes();
        firebase.initializeApp({
            apiKey: "AIzaSyBhY1RdVZ2ZpOTqjrTDWWuTULq0fLxpFQQ",
            authDomain: "ng-recipe-book-d8767.firebaseapp.com"
        });
    }
}
