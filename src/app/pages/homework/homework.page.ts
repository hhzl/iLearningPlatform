import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Homework } from 'src/app/models/homework';
import { HomeworkService } from 'src/app/services/homework.service';
import { HomeworkModalPage } from '../homework-modal/homework-modal.page';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {
  public title: string;
  public homeworks: Homework[];
  public homeworkIDParent: number;
  public idSchedule: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _modalController: ModalController,
    private _homeworkService: HomeworkService
  ) {
    this.title = 'Actividades';
    this.homeworks = [];
    this.homeworkIDParent = 0;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => { this.idSchedule = params['id']; }
    );
    this.getAll();
  }

  getAll(): void {
    this._homeworkService.getAll(this.idSchedule).subscribe(
      res => {
        if (res.code === '200') {
          this.homeworks = res.data;
        } else {
          console.log(res);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  onDelete(id: number): void {
    this._homeworkService.delete(id).subscribe(
      res => {
        if (res.code === '200') {
          this.getAll();
        } else {
          console.log(res);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  updateList(): void {
    this.getAll();
  }

  sendHomeworkID(id: number): void {
    this.homeworkIDParent = id;
  }

  async openModalAdd() {
    const modal = await this._modalController.create({
      component: HomeworkModalPage,
      componentProps: {
        idSchedule: this.idSchedule
      }
    });

    await modal.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getAll();
      event.target.complete();
    }, 2000);
  }
}