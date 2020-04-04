import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { MovieService } from "./movie.service";

@Injectable({
    providedIn: 'root'
  })
  
  export class MovieResolver implements Resolve<any> {
  
    constructor(private movieService: MovieService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.movieService.loadMovie(route.params.id);
    }
  }
  