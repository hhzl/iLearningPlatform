import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworkPageRoutingModule } from './homework-routing.module';

import { HomeworkPage } from './homework.page';
import { HomeworkModalPage } from '../homework-modal/homework-modal.page';
import { HomeworkModalPageModule } from '../homework-modal/homework-modal.module';

@NgModule({
  entryComponents: [
    HomeworkModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeworkPageRoutingModule,
    HomeworkModalPageModule
  ],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule { }
