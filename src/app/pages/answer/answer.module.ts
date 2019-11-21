import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswerPageRoutingModule } from './answer-routing.module';

import { AnswerPage } from './answer.page';
import { AnswerModalPage } from '../answer-modal/answer-modal.page';
import { AnswerModalPageModule } from '../answer-modal/answer-modal.module';

@NgModule({
  entryComponents: [
    AnswerModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerPageRoutingModule,
    AnswerModalPageModule
  ],
  declarations: [AnswerPage]
})
export class AnswerPageModule { }
