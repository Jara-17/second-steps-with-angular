import { Routes } from '@angular/router';
import { HomeComponent } from '@/public/home/home.component';
import { DetailComponent } from '@/public/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'detail/:date',
    component: DetailComponent,
  },
];
