import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-added-by-me-movies',
  templateUrl: './added-by-me-movies.component.html',
  styleUrls: ['./added-by-me-movies.component.css']
})
export class AddedByMeMoviesComponent implements OnInit {

  userAddedMovies: IMovie[] | IMovie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.loadMovie().subscribe(movies => {
        this.userAddedMovies = (movies as IMovie[]).filter(x => x.creator === localStorage.getItem("username"));
    })
  }
}
