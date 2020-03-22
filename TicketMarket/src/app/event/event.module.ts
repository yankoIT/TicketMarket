import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [CreateComponent, DetailComponent],
  imports: [
    CommonModule, 
    EventRoutingModule
  ]
})
export class EventModule { }
