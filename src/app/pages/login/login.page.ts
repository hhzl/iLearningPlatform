import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public title: string;
  public login: boolean;
  public userSignin: User;
  public userSignup: User;

  constructor(
    private _router: Router,
    private _toastController: ToastController,
    private _authService: AuthService,
    private _userService: UserService
  ) {
    this.title = 'Iniciar sesión';
    this.login = false;
    this.userSignin = new User(0, '', '', '', '', 0, true, false, false, false);
    this.userSignup = new User(0, '', '', '', '', null, true, false, false, false);
  }

  ngOnInit(): void {
    if (this._authService.canActivate()) {
      this._router.navigate(['/home']);
    }
  }

  alternateLog(): void {
    if (this.login) {
      this.login = false;
      this.title = 'Iniciar sesión';
    } else {
      this.login = true;
      this.title = 'Regístrate';
    }
  }

  async signup() {
    this._userService.addUser(this.userSignup).subscribe(
      async res => {
        if (res.code === '200') {
          console.log("User registered successfully");
          this.userSignin = this.userSignup;
          this.signin();
        } else {
          console.log(res);
        }
      },
      async err => {
        console.log(<any>err);

        const toastSignup = await this._toastController.create({
          message: <any>err,
          duration: 2000
        });
        toastSignup.present();
      }
    );
  }

  async signin() {
    this._userService.authenticate(this.userSignin.email, this.userSignin.password)
      .subscribe(
        async res => {
          this._userService.saveStorage(res);
        },
        async err => {
          console.log(<any>err);

          const toastSignin = await this._toastController.create({
            message: 'El nombre de usuario y la contraseña que ingresaste no coinciden con nuestros '
              + 'registros. Por favor, revisa e inténtalo de nuevo.',
            duration: 2000
          });
          toastSignin.present();
        }
      );
  }
}