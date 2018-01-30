import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service'
import { Router } from '@angular/router'
import { Question } from '../../user/question'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor(
    private _route: Router,
    private _userService: UserService
) { }

  ngOnInit() {
   this.question = new Question();

   if (!this._userService.currentUser) {
          this._route.navigateByUrl('')
      }
  }

  home() {
    this._route.navigateByUrl('/dashboard')
  }

  onSubmit() {
    console.log(this.question)
    this._userService.createQuest(this.question,
        (quest) => {
          this._route.navigateByUrl('/dashboard')
        },
        (err) => {
          console.log(err);
        }
    );
    this.question = new Question();
}

}
