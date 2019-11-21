import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Answer } from 'src/app/models/answer';
import { AnswerService } from 'src/app/services/answer.service';
import { AnswerModalPage } from '../answer-modal/answer-modal.page';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {
  public title: string;
  public answers: Answer[];
  public answerIDParent: number;
  public idQuestion: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _modalController: ModalController,
    private _answerService: AnswerService) {
    this.title = 'Respuestas';
    this.answers = [];
    this.answerIDParent = 0;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => { this.idQuestion = params['idQuestion']; }
    );
    this.getAll();
  }

  getAll(): void {
    this._answerService.getAll(this.idQuestion).subscribe(
      res => {
        if (res.code === '200') {
          this.answers = res.data;
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
    this._answerService.delete(id).subscribe(
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

  sendAnswerID(id: number): void {
    this.answerIDParent = id;
  }

  async openModalAdd() {
    const modal = await this._modalController.create({
      component: AnswerModalPage,
      componentProps: {
        idQuestion: this.idQuestion
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