import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('[a-zA-Z0-9.-_]{6,}@[a-zA-Z0-9]\.[a-z]')
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin({ email, password }: { email: string, password: string }) {
    this.userService.login(email, password).subscribe(userInfo => {
      this.userService.setAuthInfo(userInfo);
      this.router.navigate(['']);
    }, console.error);
  }
}