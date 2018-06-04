import { Ingredient } from "./../../models/ingredient.model";
import { Component, OnInit, EventEmitter, OnDestroy } from "@angular/core";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    currentIndex: number;
    private ingredientSub: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}
    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientSub = this.shoppingListService.ingredientSubject.subscribe(ingredients => {
            this.ingredients = ingredients;
        });
    }

    onEditItem(index: number){
        this.currentIndex = index;
        this.shoppingListService.currentIngredientIndexSubject.next(index);
    }

    ngOnDestroy(): void {
        this.ingredientSub? this.ingredientSub.unsubscribe(): null ;
    }
}
