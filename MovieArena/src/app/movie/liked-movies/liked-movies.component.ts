import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liked-movies',
  templateUrl: './liked-movies.component.html',
  styleUrls: ['./liked-movies.component.css']
})
export class LikedMoviesComponent implements OnInit {
  likedMovies: IMovie[] | IMovie;

  constructor(
    private movieService: MovieService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.movieService.loadMovie().subscribe(movies => {
        this.likedMovies = (movies as IMovie[]).filter(x => x.fans.includes(localStorage.getItem("username")));
    }, () => this.toastr.error("Something went wrong! Please try later!"))
  }
}
