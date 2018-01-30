import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user'
import { Question } from '../user/question'
import { Router } from '@angular/router'


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  user: User;

  questions: Question[];

  constructor(
    private _route: Router,
    private _userService: UserService,
  ) { this.questions = this._userService.questions; }

  ngOnInit() {
      this.user = new User;
      this.user = this._userService.currentUser;    
      console.log(this.user);

      this._userService.getQuestions( 
        (user) => {
          console.log
        },
        (err) => {
          console.log(err);
        }
      );   
  }

  newquest() {
    this._route.navigateByUrl('/quest')
  }

}
