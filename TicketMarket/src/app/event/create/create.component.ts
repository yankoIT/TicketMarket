import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  minDate = undefined;

  constructor( 
    private eventService: EventService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  handleEventCreation({ event, date, time, location, ticketPrice, description, imageUrl }) {
    console.log(event, date, time, location, ticketPrice, description, imageUrl);

    this.eventService.create({ event, date, time, location, ticketPrice, description, imageUrl }).subscribe(eventInfo => {
      this.router.navigate(['']);
      this.toastr.success(`Event ${event} is created successfully!`);
    }, () =>  this.toastr.error("Event creation failed"));
  }
}
