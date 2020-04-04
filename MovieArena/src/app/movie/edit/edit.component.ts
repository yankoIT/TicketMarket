import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '../../shared/interfaces/movie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movie: IMovie;
  updateMovieForm: FormGroup;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
      this.movie = activatedRoute.snapshot.data.movie;

      this.updateMovieForm = this.fb.group({
        name: [this.movie?.name, [Validators.required]],
        releaseDate: [this.movie?.releaseDate, [Validators.required]],
        genre: [this.movie?.genre, [Validators.required]],
        director: [this.movie?.director, [Validators.required]],
        writers: [this.movie?.writers, [Validators.required]],
        imageUrl: [this.movie?.imageUrl, [Validators.required]],
        cast: [this.movie?.cast, [Validators.required]],
        description: [this.movie?.description, [Validators.required]],
        organizer: [this.movie?.organizer, [Validators.required]],
        likes: [this.movie?.fans, [Validators.required]]
      });
  }

  ngOnInit(): void {
  }

  handleMovieEditing() {
    this.movieService.updateMovie(this.activatedRoute.snapshot.params.id, this.updateMovieForm.value).subscribe(() => {
      this.router.navigate([`/movie/detail/${this.activatedRoute.snapshot.params.id}`]);
    })
  }
}
