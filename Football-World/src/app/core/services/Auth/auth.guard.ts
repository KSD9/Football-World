import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(sessionStorage.getItem("currentUser") != null){
            return true;
        }
        else {
            this.router.navigate(["/login"], {queryParams: {url: state.url}});
            return false;
        }
    }
}