import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { Commentary } from 'src/app/models/commentary';
import { Schedule } from 'src/app/models/schedule';
import { Publication } from 'src/app/models/publication';
import { Test } from 'src/app/models/test';
import { Homework } from 'src/app/models/homework';
import { UserService } from 'src/app/services/user.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { PublicationService } from 'src/app/services/publication.service';
import { CommentaryService } from 'src/app/services/commentary.service';
import { TestService } from 'src/app/services/test.service';
import { HomeworkService } from 'src/app/services/homework.service';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.page.html',
  styleUrls: ['./course-dashboard.page.scss'],
})
export class CourseDashboardPage implements OnInit {
  public idSchedule: number;
  public schedule: Schedule;
  public publications: Publication[];
  public tests: Test[];
  public homeworks: Homework[];
  public user: User;
  public commentaryUser: Commentary;
  public publicationUser: Publication;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _scheduleService: ScheduleService,
    private _publicationService: PublicationService,
    private _commentaryService: CommentaryService,
    private _testService: TestService,
    private _homeworkService: HomeworkService
  ) {
    this.schedule = new Schedule(null, null, null, '', '', '', '', '', '', '');
    this.publications = [];
    this.user = _userService.getUser();
    this.commentaryUser = new Commentary(null, null, this.user.idProfile, '', '', '', '');
    this.publicationUser = new Publication(null, this.user.idProfile, null, null, '', '',
      '', '', '', '', []);
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      params => { this.idSchedule = params['id']; }
    );
    this.getSchedule();
    this.getPublications();
    this.getHomeworks();
    this.getTests();
  }

  getSchedule(): void {
    this._scheduleService.getByID(this.idSchedule).subscribe(
      res => {
        if (res.code === '200') {
          this.schedule = res.data;
        } else {
          console.log(res);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  addPublication(): void {
    this.publicationUser.idSchedule = this.idSchedule;
    this._publicationService.add(this.publicationUser).subscribe(
      () => {
        this.publicationUser = new Publication(null, this.user.idProfile, null, null, '', '',
          '', '', '', '', []);
        this.getPublications();
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  getPublications(): void {
    this._publicationService.getBySchedule(this.idSchedule).subscribe(
      res => {
        if (res.code === '200') {
          this.publications = res.data;
          this.getCommentaries();
        } else {
          console.log(res);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  addCommentary(idPublication: number): void {
    this.commentaryUser.idPublication = idPublication;
    this._commentaryService.add(this.commentaryUser).subscribe(
      () => {
        this.commentaryUser = new Commentary(null, null, this.user.idProfile, '', '', '', '');
        this.getPublications();
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  getCommentaries() {
    this.publications.forEach(publication => {
      this._commentaryService.getByPublication(publication.idPublication).subscribe(
        res => {
          if (res.code === '200') {
            publication.commentaries = res.data;
          } else {
            console.log(res);
          }
        },
        err => {
          console.log(<any>err);
        }
      );
    });
  }

  getHomeworks(): void {
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

  getTests(): void {
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
}