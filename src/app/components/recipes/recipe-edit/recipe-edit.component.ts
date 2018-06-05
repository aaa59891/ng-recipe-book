import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../../models/recipe.model";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { AutoUnsubscribe } from "../../../abstracts/AutoUnsubscribe";

@Component({
    selector: "app-recipe-edit",
    templateUrl: "./recipe-edit.component.html",
    styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent extends AutoUnsubscribe implements OnInit {
    editMode = false;
    form: FormGroup;
    id: number = -1;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router
    ) {
        super();
    }

    get imagePath(){
        return this.form.get('imagePath');
    }

    get ingredients(){
        return this.form.get('ingredients') as FormArray;
    }

    ngOnInit() {
        this.subscriptions.push(
            this.route.paramMap.subscribe(paramMap => {
                const id = paramMap.get('id');
                if(id){
                    this.id = +id;
                    this.editMode = true;
                }
                this.initForm();
            })
        );
    }

    onSubmit(){
        if(this.editMode){
            this.recipeService.updateRecipe(this.id, this.form.value as Recipe);
        }else{
            this.recipeService.addRecipe(this.form.value);
        }
        this.router.navigate(['/recipes']);
    }

    onCancel(){
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onAddIngredient(){
        this.ingredients.push(this.createIngredientControlGroup());
    }

    onDeleteIngredient(index: number){
        this.ingredients.removeAt(index);
    }

    private initForm(){
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            imagePath: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'blur'
            }),
            description: new FormControl(null, Validators.required),
            ingredients: new FormArray([]),
        });
        if(this.editMode){
            const recipe = this.recipeService.getRecipe(this.id);
            if(!recipe){
                this.router.navigate(['/recipes']);
                return;
            }
            for(let i = 0; i < recipe.ingredients.length; i++){
                this.ingredients.push(this.createIngredientControlGroup())
            }
            this.form.setValue(recipe);
        }
    }

    private createIngredientControlGroup(): FormGroup{
        return new FormGroup({
            name: new FormControl(null, Validators.required),
            amount: new FormControl(null, [Validators.required, Validators.min(1)])
        });
    }
}
