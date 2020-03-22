import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreateComponent, DetailComponent],
  imports: [
    CommonModule, 
    EventRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class EventModule { }
