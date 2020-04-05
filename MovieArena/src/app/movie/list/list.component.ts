import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }
  @Input() movies: IMovie[] | IMovie; 

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
     
  }

  selectMovieHandler(movie) {
    this.router.navigate([`/movie/detail/${movie._id}`]);
  }
}
