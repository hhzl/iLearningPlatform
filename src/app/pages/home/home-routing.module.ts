import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// Components

const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'course/:id',
    loadChildren: () => import('src/app/pages/course-dashboard/course-dashboard.module').then(m => m.CourseDashboardPageModule)
  },
  {
    path: 'course/:id/student',
    loadChildren: () => import('src/app/pages/student/student.module').then(m => m.StudentPageModule)
  },
  {
    path: 'course/:id/test',
    loadChildren: () => import('src/app/pages/test/test.module').then(m => m.TestPageModule)
  },
  {
    path: 'course/:id/test/:idTest/question/:idQuestion/answer',
    loadChildren: () => import('src/app/pages/answer/answer.module').then(m => m.AnswerPageModule)
  },
  {
    path: 'course/:id/homework',
    loadChildren: () => import('src/app/pages/homework/homework.module').then(m => m.HomeworkPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('src/app/pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'course/:id/test/:idTest/question',
    loadChildren: () => import('src/app/pages/question/question.module').then(m => m.QuestionPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('src/app/pages/ticket/ticket.module').then(m => m.TicketPageModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
