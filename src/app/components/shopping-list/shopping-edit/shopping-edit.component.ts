import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from "@angular/core";
import { Ingredient } from "../../../models/ingredient.model";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "./shopping-edit.component.html",
    styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output('addIngredient') addIngredientEE = new EventEmitter<Ingredient>();
    constructor() {}

    ngOnInit() {}

    onAdd(){
        this.addIngredientEE.emit(new Ingredient(
            String(this.nameInput.nativeElement.value),
            Number(this.amountInput.nativeElement.value)
        ));
    }

    onDelete(){

    }

    onClean(){

    }
}
