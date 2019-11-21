import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { TestModalPage } from '../test-modal/test-modal.page';
import { TestModalPageModule } from '../test-modal/test-modal.module';

@NgModule({
  entryComponents: [
    TestModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    TestModalPageModule
  ],
  declarations: [TestPage]
})
export class TestPageModule { }
