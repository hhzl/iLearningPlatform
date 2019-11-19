import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDashboardPage } from './course-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDashboardPageRoutingModule {}
