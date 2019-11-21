import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.page.html',
  styleUrls: ['./test-modal.page.scss'],
})
export class TestModalPage implements OnInit {
  public title: string;
  public test: Test;
  public idModal: string;

  @Input() idSchedule;
  @Output() updateList;

  constructor(
    private _modalController: ModalController,
    private _testService: TestService
  ) {
    this.title = 'AGREGAR EVALUACION';
    this.test = new Test(null, null, '', null, null, 10);
    this.idModal = 'addTest';
    this.updateList = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.test.idSchedule = this.idSchedule;
    this._testService.add(this.test).subscribe(
      res => {
        this.test = new Test(null, null, '', null, null, 10);
        this.update();
      },
      err => {
        console.log(<any>err);
      }
    );
    this.hideModal();
  }

  update(): void {
    this.updateList.emit('Update List Tests');
  }

  hideModal(): void {
    this._modalController.dismiss();
  }
}