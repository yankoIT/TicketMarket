import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  registerHandler(email, password) {
     this.userService.register(email, password).subscribe(userInfo => {
      this.router.navigate(['login']);
      this.toastr.success("Successful registration!");
    }, () => this.toastr.error("Registration failed!"));
  }
}
