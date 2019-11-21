import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Answer } from 'src/app/models/answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.page.html',
  styleUrls: ['./answer-modal.page.scss'],
})
export class AnswerModalPage implements OnInit {
  public title: string;
  public answer: Answer;
  public idModal: string;

  @Input() idQuestion;
  @Output() updateList;

  constructor(
    private _modalController: ModalController,
    private _answerService: AnswerService
  ) {
    this.title = 'AGREGAR RESPUESTA';
    this.answer = new Answer(null, null, null, '');
    this.idModal = 'addAnswer';
    this.updateList = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.answer.idQuestion = this.idQuestion;
    this._answerService.add(this.answer).subscribe(
      res => {
        this.answer = new Answer(null, null, null, '');
        this.update();
      },
      err => {
        console.log(<any>err);
      }
    );
    this.hideModal();
  }

  update(): void {
    this.updateList.emit('Update List Answers');
  }

  hideModal(): void {
    this._modalController.dismiss();
  }
}