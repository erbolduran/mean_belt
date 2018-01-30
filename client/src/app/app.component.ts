import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    constructor(
        private _userService: UserService,
        private _route: Router,
        private _location: Location
      ) {}

    ngOnInit() {
        this._userService.getCurrentUser(
            (user) => {
                console.log(this._userService.currentUser)
                if (!user) {
                    this._route.navigateByUrl('/');
                    return;
                }
                
            },
            console.log
        )
    }
}

