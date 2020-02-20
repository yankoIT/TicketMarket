import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  get isLogged() { return !!sessionStorage.getItem('username') }
  get username() { return sessionStorage.getItem('username') }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
