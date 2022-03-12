import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';
import { UserViewModel } from '../models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.baseUrl;

  currentUser?: User;

  constructor(
      private userService: UserService,
     private router: Router) { }

  register(model: User){
    return this.userService.postReader(<UserViewModel>model);
  }

  login(model: User){
    return this.userService.getApiUsers().pipe(
      map((res) => {
          console.log(res, model)
          let user = (<User[]><any>res).find(x => x.mail === model.mail);
          
          if(user && user?.password === model.password) {
            localStorage.removeItem('user');
            this.setCurrentUser(user);
            return true;
          }
          return false;
        })
    )
  }

  setCurrentUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }

  getUserFromLocalStorage() {
    let userString = localStorage.getItem('user');
    if(userString) {
      this.currentUser = JSON.parse(userString);
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser = undefined;
    this.router.navigateByUrl('/login');
  }
}
