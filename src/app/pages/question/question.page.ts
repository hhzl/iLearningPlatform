import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionModalPage } from '../question-modal/question-modal.page';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  public title: string;
  public questions: Question[];
  public questionIDParent: number;
  public idTest: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _modalController: ModalController,
    private _questionService: QuestionService
  ) {
    this.title = 'Preguntas';
    this.questions = [];
    this.questionIDParent = 0;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => { this.idTest = params['idTest']; }
    );
    this.getAll();
  }

  getAll(): void {
    this._questionService.getAll(this.idTest).subscribe(
      res => {
        if (res.code === '200') {
          this.questions = res.data;
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
    this._questionService.delete(id).subscribe(
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

  sendQuestionID(id: number): void {
    this.questionIDParent = id;
  }

  async openModalAdd() {
    const modal = await this._modalController.create({
      component: QuestionModalPage,
      componentProps: {
        idTest: this.idTest
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