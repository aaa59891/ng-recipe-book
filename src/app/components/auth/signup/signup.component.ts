import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
    @ViewChild('form') form: NgForm;
    constructor(
        private authService: AuthService
    ) {}

    ngOnInit() {}

    onSubmit(){
        this.authService.signUp(this.form.value)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
}
