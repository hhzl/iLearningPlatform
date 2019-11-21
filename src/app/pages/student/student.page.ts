import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  public title: string;
  public users: User[];
  public idSchedule: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {
    this.title = 'Alumnos';
    this.users = [];
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => { this.idSchedule = params['id']; }
    );
    this.getAll();
  }

  getAll(): void {
    this._userService.getBySchedule(this.idSchedule).subscribe(
      res => {
        if (res.code === '200') {
          this.users = res.data;
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
