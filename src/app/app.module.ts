import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CourseService } from './services/course.service';
import { ScheduleService } from './services/schedule.service';
import { AssignmentService } from './services/assignment.service';
import { PublicationService } from './services/publication.service';
import { CommentaryService } from './services/commentary.service';
import { HomeworkService } from './services/homework.service';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    UserService,
    CourseService,
    ScheduleService,
    AssignmentService,
    PublicationService,
    CommentaryService,
    HomeworkService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
