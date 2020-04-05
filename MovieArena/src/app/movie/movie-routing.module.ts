import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../auth.guard';
import { EditComponent } from './edit/edit.component';
import { MovieResolver } from './movie-resolver';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';
import { AddedByMeMoviesComponent } from './added-by-me-movies/added-by-me-movies.component';

const routes: Routes = [
  {
      path: 'movie',
      children: [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: '/movie/create',
              canActivate: [AuthGuard],
              data: {
                isLogged: true
              }
          },
          {
              path: 'create',
              component: CreateComponent,
              canActivate: [AuthGuard],
              data: {
                isLogged: true
              }
          },
          {
              path: 'detail/:id',
              component: DetailComponent,
              resolve: {
                movie: MovieResolver,
              },
              canActivate: [AuthGuard],
              data: {
                isLogged: true
              }
          },
          {
            path: 'edit/:id',
            resolve: {
              movie: MovieResolver,
            },
            component: EditComponent,
            canActivate: [AuthGuard],
            data: {
              isLogged: true
            }
          },
          {
            path: 'all',
            resolve: {
              movie: MovieResolver,
            },
            component: AllMoviesComponent,
            canActivate: [AuthGuard],
            data: {
              isLogged: true
            }
          },
          {
            path: 'liked',
            resolve: {
              movie: MovieResolver,
            },
            component: LikedMoviesComponent,
            canActivate: [AuthGuard],
            data: {
              isLogged: true
            }
          },
          {
            path: 'mine',
            resolve: {
              movie: MovieResolver,
            },
            component: AddedByMeMoviesComponent,
            canActivate: [AuthGuard],
            data: {
              isLogged: true
            }
          },
      ]
  }
];

export const MovieRoutingModule = RouterModule.forChild(routes);
