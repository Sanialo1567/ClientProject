
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../api/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginedGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) { }

  canActivate() : boolean {
    if(this.accountService.currentUser) {
      return true;
    }
    this.toastr.error("First login!");
    this.router.navigate(['/login']);
    return false;
  }
  
}
