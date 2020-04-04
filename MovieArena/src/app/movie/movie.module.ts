import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CreateComponent, DetailComponent, EditComponent],
  imports: [
    CommonModule, 
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class MovieModule { }
