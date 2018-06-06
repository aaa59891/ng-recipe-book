import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import * as firebase from 'firebase';
@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor() {}

    signUp(user: User){
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    }
}
