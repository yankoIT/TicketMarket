import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
      path: 'event',
      children: [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: '/event/create',
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
              canActivate: [AuthGuard],
              data: {
                isLogged: true
              }
          }
      ]
  }
];

export const EventRoutingModule = RouterModule.forChild(routes);
