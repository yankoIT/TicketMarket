import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent, DetailComponent],
  imports: [
    CommonModule, 
    EventRoutingModule,
    FormsModule
  ]
})
export class EventModule { }
