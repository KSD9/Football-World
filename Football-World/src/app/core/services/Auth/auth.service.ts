import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

private userName;
    constructor(private router: Router){}
    register(email: string, password: string) {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    login(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                sessionStorage.setItem("currentUser", response.user["email"]);
                this.router.navigate(["/home"]);
            }
        )
        .catch(
            error => alert("Wrong credentials!")
);
    
    }
    isLogged (){
        if(sessionStorage.getItem("currentUser") != null){
            return true;
        }
        else {
            
            return false;
        }
    }

    getUserName(){
        userName = sessionStorage.getItem("currentUser")
        return userName
    }

    logout(){
        sessionStorage.clear()
    }
}