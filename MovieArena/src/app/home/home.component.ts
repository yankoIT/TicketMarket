import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MovieService } from '../movie/movie.service';
import { IMovie } from '../shared/interfaces/movie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }
  topMovies: IMovie[] | IMovie;

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.movieService.loadMovie().subscribe(movies => {
      if ((movies as IMovie[]).length > 1) {
        this.topMovies = (movies as IMovie[]).sort((a, b) => b.fans.length - a.fans.length || a.name.localeCompare(b.name)).slice(0, 5);
      }
      else {
        this.topMovies = movies;
      }
    }, () =>  this.toastr.error("Something went wrong! Please try later!"))
  }
}
