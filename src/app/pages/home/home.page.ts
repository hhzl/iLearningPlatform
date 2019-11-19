import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { User } from 'src/app/models/user';
import { Course } from 'src/app/models/course';
import { Assignment } from 'src/app/models/assignment';
import { Schedule } from 'src/app/models/schedule';
import { UserService } from 'src/app/services/user.service';
import { CourseService } from 'src/app/services/course.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public titleAllCourses: string;
  public titleAssistantCourses: string;
  public titleMyCourses: string;

  public allCourses: Course[];
  public assistantCourses: Schedule[];
  public myCourses: Assignment[];
  public schedules: Schedule[];

  public user: User;

  constructor(
    private _toastController: ToastController,
    private _userService: UserService,
    private _courseService: CourseService,
    private _assignmentService: AssignmentService,
    private _scheduleService: ScheduleService
  ) {
    this.titleAllCourses = 'Cursos';
    this.titleAssistantCourses = 'Administrar Cursos';
    this.titleMyCourses = 'Mis Cursos';

    this.allCourses = [];
    this.assistantCourses = [];
    this.myCourses = [];
    this.schedules = [];
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
    this.getCourses();
    this.getSchedules();
  }

  getCourses(): void {
    if (this.user.isStudent) {
      this._courseService.getAll().subscribe(
        res => {
          if (res.code === '200') {
            this.allCourses = res.data;
          } else {
            console.log(res);
          }
        },
        err => {
          console.log(<any>err);
        }
      );

      this._assignmentService.getByUser(this.user.idProfile).subscribe(
        res => {
          if (res.code === '200') {
            this.myCourses = res.data;
            this.removeCourse();
          } else {
            console.log(res);
          }
        },
        err => {
          console.log(<any>err);
        }
      );
    }

    if (this.user.isAssistant) {
      this._scheduleService.getByAssistant(this.user.idProfile).subscribe(
        res => {
          if (res.code === '200') {
            this.assistantCourses = res.data;
            this.removeCourse();
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

  getSchedules(): void {
    this._scheduleService.getAll().subscribe(
      res => {
        if (res.code === '200') {
          this.schedules = res.data;
        } else {
          console.log(res);
        }
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  removeCourse(): void {
    let index: number;

    if (this.user.isStudent) {
      for (var i = 0; i < this.allCourses.length; i++) {
        this.myCourses.forEach(myCourse => {
          if (this.allCourses[i].idCourse == myCourse.idCourse) {
            index = this.allCourses.indexOf(this.allCourses[i]);

            if (index !== -1) {
              this.allCourses.splice(index, 1);
              i = 0;
            }
          }
        });
      }
    }

    if (this.user.isAssistant) {
      for (var i = 0; i < this.allCourses.length; i++) {
        this.assistantCourses.forEach(myCourse => {
          if (this.allCourses[i].idCourse == myCourse.idCourse) {
            index = this.allCourses.indexOf(this.allCourses[i]);

            if (index !== -1) {
              this.allCourses.splice(index, 1);
              i = 0;
            }
          }
        });
      }
    }
  }

  async toAssign(id: number) {
    let assignment: Assignment = new Assignment(0, this.user.idProfile, id, 0, 0, '', '', '', '',
      '', '', '', '');
    this._assignmentService.add(assignment).subscribe(
      async res => {
        if (res.code === '200') {
          const toast = await this._toastController.create({
            message: 'Curso Asignado',
            duration: 2000
          });
          toast.present();
          this.getCourses();
        } else {
          console.log(res);
        }
      },
      async err => {
        console.log(<any>err);
      }
    );
  }

  async onDelete(id: number) {
    this._assignmentService.delete(id).subscribe(
      async res => {
        if (res.code === '200') {
          const toast = await this._toastController.create({
            message: 'Curso Desasignado',
            duration: 2000
          });
          toast.present();
          this.getCourses();
        } else {
          console.log(res);
        }
      },
      async err => {
        console.log(<any>err);
      }
    );
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getCourses();
      event.target.complete();
    }, 2000);
  }
}
