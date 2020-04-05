import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ListComponent } from './list/list.component';
import { AddedByMeMoviesComponent } from './added-by-me-movies/added-by-me-movies.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    EditComponent,
    AllMoviesComponent,
    ListComponent,
    AddedByMeMoviesComponent,
    LikedMoviesComponent],
  imports: [
    CommonModule, 
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports : [
    ListComponent
  ]
})
export class MovieModule { }
