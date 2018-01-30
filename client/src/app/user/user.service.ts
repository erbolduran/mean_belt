import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Question } from './question';


@Injectable()
export class UserService {
  currentUser: User;

  questions: Question[] = [];
  
  constructor(
      private _http: Http
  ) { }

  createUser(user: User, callback, errorback) {
      this._http.post('/users', user).subscribe(
          (res) => {
              const user = res.json();

              this.currentUser = user;

              callback(this.currentUser);
          },
          (err) => {
              errorback(err)
          }
      )
  }

  createQuest(question: Question, callback, errorback) {
    console.log(question)
    this._http.post('/questions', question).subscribe(
        (res) => {
            const question = res.json();

            this.questions += question;

            callback(this.questions);
        },
        (err) => {
            errorback(err)
        }
    )
}

  getCurrentUser(callback, errorback) {
      this._http.get('/sessions').subscribe(
          (res) => {
              const user = res.json();

              console.log(user)

              if (user) {
                  this.currentUser = user;
              }

              callback(user);
          },
          (err) => {
              errorback(err);
          }
      )
  }

  getQuestions(callback, errorback) {
    this._http.get('/questions').subscribe(
        (res) => {
            const question = res.json();

            if (question) {
                this.questions = question;
            }
            
        },
        (err) => {
            errorback(err);
        }
    )
}

  logout(callback, errorback) {
      this._http.delete('/sessions').subscribe(
          (res) => {
              this.currentUser = null;

              callback(res.json());
          },
          (err) => {
              errorback(err);
          }
      )
  }
}
