import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserComponent } from './user/user.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { QuestionComponent } from './note/question/question.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent, children: [
      { path: '', component: UserNewComponent }
  ] },
  { path: 'user', component: UserComponent, children: [
      { path: 'new', component: UserNewComponent }
  ] },
  { path: 'dashboard', component: NoteComponent, children: [
    { path: '', component: NoteListComponent }
  ] },
  { path: 'quest', component: QuestionComponent },
  { path: '*', component: UserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
