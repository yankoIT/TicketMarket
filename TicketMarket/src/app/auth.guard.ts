import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "./shared/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         return this.userService.isLogged === route.data.isLogged;
    }
}