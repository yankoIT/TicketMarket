import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../auth.guard';
import { EditComponent } from './edit/edit.component';
import { MovieResolver } from './movie-resolver';

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
        }
      ]
  }
];

export const MovieRoutingModule = RouterModule.forChild(routes);
