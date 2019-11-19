import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDashboardPageRoutingModule } from './course-dashboard-routing.module';

import { CourseDashboardPage } from './course-dashboard.page';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDashboardPageRoutingModule
  ],
  declarations: [
    CourseDashboardPage,
    TimeAgoPipe
  ]
})
export class CourseDashboardPageModule { }
