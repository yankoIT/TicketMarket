import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('[a-zA-Z0-9.-_]{6,}@[a-zA-Z0-9]\.[a-z]')
  
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  loginHandler({ email, password }: { email: string, password: string }) {
    this.userService.login(email, password).subscribe(userInfo => {
      this.userService.setAuthInfo(userInfo);
      this.router.navigate(['']);
      this.toastr.success("Login successful!");
    }, () =>  this.toastr.error("Invalid credentials!"));
  }
}