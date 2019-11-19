import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// Components

const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'course/:id',
    loadChildren: () => import('src/app/pages/course-dashboard/course-dashboard.module').then(m => m.CourseDashboardPageModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
