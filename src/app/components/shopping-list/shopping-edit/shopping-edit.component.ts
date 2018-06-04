import { Component, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "../../../models/ingredient.model";
import { ShoppingListService } from "../../../services/shopping-list.service";
import { NgForm } from "@angular/forms";
import { AutoUnsubscribe } from "../../../abstracts/AutoUnsubscribe";
import { interval } from "rxjs";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "./shopping-edit.component.html",
    styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent extends AutoUnsubscribe implements OnInit {
    @ViewChild('form') form: NgForm;
    constructor(private shoppingListService: ShoppingListService) {
        super();
    }
    currentIndex: number;
    editMode = false;
    editIngredient: Ingredient;

    ngOnInit() {
        this.subscriptions.push(
            this.shoppingListService.currentIngredientIndexSubject.subscribe((index) => {
                this.editMode = true;
                this.currentIndex = index;
                this.editIngredient = this.shoppingListService.getIngredient(index);
                this.form.setValue(this.editIngredient);
            })
        );
        
    }
    
    onSubmit(){
        this.editMode
        ?
        this.shoppingListService.updateIngredient(this.currentIndex, {...this.form.value} as Ingredient)
        :
        this.shoppingListService.addIngredient({...this.form.value} as Ingredient);
        this.onClean();
    }

    onDelete(){
        this.shoppingListService.deleteIngredient(this.currentIndex);
        this.onClean();
    }

    onClean(){
        this.form.reset();
        this.editMode = false;
    }
}
