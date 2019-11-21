import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';
import { TestModalPage } from '../test-modal/test-modal.page';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  public title: string;
  public tests: Test[];
  public testIDParent: number;
  public idSchedule: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _modalController: ModalController,
    private _testService: TestService
  ) {
    this.title = 'Evaluaciones';
    this.tests = [];
    this.testIDParent = 0;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => { this.idSchedule = params['id']; }
    );
    this.getAll();
  }

  getAll(): void {
    this._testService.getAll(this.idSchedule).subscribe(
      res => {
        if (res.code === '200') {
          this.tests = res.data;
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
    this._testService.delete(id).subscribe(
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

  sendTestID(id: number): void {
    this.testIDParent = id;
  }

  async openModalAdd() {
    const modal = await this._modalController.create({
      component: TestModalPage,
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