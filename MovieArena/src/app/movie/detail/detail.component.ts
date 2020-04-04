import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { IMovie } from '../../shared/interfaces/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isOrganizer: boolean;
  isFan: boolean;
  movie: IMovie;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.movie = activatedRoute.snapshot.data.movie;
      this.isOrganizer = this.movie.organizer === localStorage.getItem('username');
      this.isFan = this.movie.fans.includes(localStorage.getItem('username'));
  }

  ngOnInit() {

  }

  deleteMovieHandler() {
    this.movieService.deleteMovie(this.activatedRoute.snapshot.params.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  editMovieHandler() {
    this.router.navigate([`/movie/edit/${this.activatedRoute.snapshot.params.id}`]);
  }

  likeMovieHandler() {
    this.movieService.loadMovie(this.activatedRoute.snapshot.params.id).subscribe((movieInfo) => {
     (movieInfo as IMovie).fans.push(localStorage.getItem("username"));
      this.movieService.updateMovie(this.activatedRoute.snapshot.params.id, (movieInfo as IMovie)).subscribe(() => {
        location.reload();
      })
    })
  }

  dislikeMovieHandler() {
    this.movieService.loadMovie(this.activatedRoute.snapshot.params.id).subscribe((movieInfo) => {
      let index = (movieInfo as IMovie).fans.indexOf(localStorage.getItem("username"));
      (movieInfo as IMovie).fans.splice(index, 1);
       this.movieService.updateMovie(this.activatedRoute.snapshot.params.id, (movieInfo as IMovie)).subscribe(() => {
        location.reload();
       })
     })
  }
}
