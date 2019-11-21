import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionPageRoutingModule } from './question-routing.module';

import { QuestionPage } from './question.page';
import { QuestionModalPage } from '../question-modal/question-modal.page';
import { QuestionModalPageModule } from '../question-modal/question-modal.module';

@NgModule({
  entryComponents: [
    QuestionModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPageRoutingModule,
    QuestionModalPageModule
  ],
  declarations: [QuestionPage]
})
export class QuestionPageModule { }
