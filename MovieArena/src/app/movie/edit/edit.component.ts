import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '../../shared/interfaces/movie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movie: IMovie;
  updateMovieForm: FormGroup;
  movieGenres: string[];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.movieGenres = this.movieService.genres;
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
        creator: [this.movie?.creator, [Validators.required]],
        fans: [this.movie?.fans, [Validators.required]]
      });
  }

  ngOnInit(): void {
  }

  handleMovieEditing() {
    this.movieService.updateMovie(this.activatedRoute.snapshot.params.id, this.updateMovieForm.value).subscribe(() => {
      this.router.navigate([`/movie/detail/${this.activatedRoute.snapshot.params.id}`]);
    }, () => this.toastr.error("Update has failed! Please try later!"))
  }
}
