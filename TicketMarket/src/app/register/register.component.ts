import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

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
    private causesService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(email, password, rePassword) {
     this.causesService.register(email, password);
     this.router.navigate(['']);
  }
}
