import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  movieGenres: string[];

  constructor( 
    private movieService: MovieService,
    private router: Router,
    private toastr: ToastrService) { 
      this.movieGenres = this.movieService.genres;
    }

  ngOnInit() {

  }

  handleMovieCreation({ name, releaseDate, genre, director, writers, cast, description, imageUrl }) {
    this.movieService.create({ name, releaseDate, genre, director, writers, cast, description, imageUrl, creator: localStorage.getItem('username'), fans: [] }).subscribe(eventInfo => {
      this.router.navigate(['']);
      this.toastr.success(`Movie ${name} is created successfully!`);
    }, () =>  this.toastr.error("Movie creation failed"));
  }
}
