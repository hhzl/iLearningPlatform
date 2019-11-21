import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Homework } from 'src/app/models/homework';
import { HomeworkService } from 'src/app/services/homework.service';

@Component({
  selector: 'app-homework-modal',
  templateUrl: './homework-modal.page.html',
  styleUrls: ['./homework-modal.page.scss'],
})
export class HomeworkModalPage implements OnInit {
  public title: string;
  public homework: Homework;
  public idModal: string;

  @Input() idSchedule;
  @Output() updateList;

  constructor(
    private _modalController: ModalController,
    private _homeworkService: HomeworkService
  ) {
    this.title = 'AGREGAR ACTIVIDAD';
    this.homework = new Homework(null, null, '', null, '');
    this.idModal = 'addHomework';
    this.updateList = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.homework.idSchedule = this.idSchedule;
    this._homeworkService.add(this.homework).subscribe(
      res => {
        this.homework = new Homework(null, this.idSchedule, '', null, '');
        this.update();
      },
      err => {
        console.log(<any>err);
      }
    );
    this.hideModal();
  }

  update(): void {
    this.updateList.emit('Update List Homeworks');
  }

  hideModal(): void {
    this._modalController.dismiss();
  }
}