import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { MovieService } from '../movie.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }
  @Input() movies: IMovie[] | IMovie; 

  constructor(private userService: UserService, private movieService: MovieService, private router: Router,) { }

  ngOnInit() {
     
  }

  selectMovieHandler(movie) {
    this.router.navigate([`/movie/detail/${movie._id}`]);
  }
}
