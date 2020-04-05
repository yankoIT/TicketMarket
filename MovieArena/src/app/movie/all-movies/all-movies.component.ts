import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  allMovies: IMovie[] | IMovie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.loadMovie().subscribe(movies => {
        this.allMovies = movies;
    })
  }
}
