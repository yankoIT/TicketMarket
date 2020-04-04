import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  get isLogged() { return this.userService.isLogged; }
  get username() { return localStorage.getItem("username"); }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
