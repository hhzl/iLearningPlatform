import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.page.html',
  styleUrls: ['./question-modal.page.scss'],
})
export class QuestionModalPage implements OnInit {
  public title: string;
  public question: Question;
  public idModal: string;

  @Input() idTest;
  @Output() updateList;

  constructor(
    private _modalController: ModalController,
    private _questionService: QuestionService
  ) {
    this.title = 'AGREGAR PREGUNTA';
    this.question = new Question(null, null, '');
    this.idModal = 'addQuestion';
    this.updateList = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.question.idTest = this.idTest;
    this._questionService.add(this.question).subscribe(
      res => {
        this.question = new Question(null, null, '');
        this.update();
      },
      err => {
        console.log(<any>err);
      }
    );
    this.hideModal();
  }

  update(): void {
    this.updateList.emit('Update List Questions');
  }

  hideModal(): void {
    this._modalController.dismiss();
  }
}