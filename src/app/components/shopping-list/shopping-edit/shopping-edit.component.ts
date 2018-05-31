import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "../../../models/ingredient.model";
import { ShoppingListService } from "../../../services/shopping-list.service";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "./shopping-edit.component.html",
    styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {}

    onAdd(){
        this.shoppingListService.addIngredient(new Ingredient(
            String(this.nameInput.nativeElement.value),
            Number(this.amountInput.nativeElement.value)
        ));
    }

    onDelete(){

    }

    onClean(){

    }
}
