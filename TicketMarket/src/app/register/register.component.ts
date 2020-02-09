import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private causesService: UserService) { }

  ngOnInit() {
  }

  register(email, password, rePassword) {
     this.causesService.register(email, password);
  }
}
