import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService, WebPortalService } from 'src/app/api/services';
import { AccountService } from 'src/app/api/services/account.service';
import { Portal } from 'src/app/model/portal';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.css']
})
export class PortalPageComponent implements OnInit {
  portal?: Portal;

  isUsersOpen = false;
  isAddPostOpen = false;

  constructor(
    private route: ActivatedRoute,
    private webPortalService: WebPortalService,
    public accountService: AccountService,
    private subscriptionService: SubscriptionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let portalId = this.route.snapshot.params.id;
    let userId = this.accountService.currentUser?.id;

    if(userId)
    this.webPortalService.getApiWebPortalsIdUserId({ id: portalId, userId: userId}).subscribe(res => {
      this.portal = <Portal><any>res;
      if(this.portal.posts[0] === null) {
        this.portal.posts = [];
      }
    })
  }

  getUserCount() {
    return this.portal?.users.length;
  }

  subscribeToPortal() {
    this.subscriptionService.postApiSubscription({
      userId: this.accountService.currentUser?.id,
      webPortalId: this.portal?.id
    }).subscribe(res => {
      this.toastr.success('Successfully subcribed');
      if(this.accountService.currentUser) {
        this.portal?.users.push(this.accountService.currentUser)
      }
    })
  }

  showHideUsers() {
    if(this.accountService.currentUser?.role === 0) {
      this.isUsersOpen = !this.isUsersOpen
    }
  }

  isNotSubscribed() {
    return this.portal?.users.find(x => x.id === this.accountService.currentUser?.id) ? false : true;
  }

}
