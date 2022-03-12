import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/api/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  queryString = '';

  constructor(
    public accountService: AccountService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.accountService.getUserFromLocalStorage();
  }

  logout() {
    this.accountService.logout();
  }

  search() {
    this.router.navigate(['/search', this.queryString])
  }
}
