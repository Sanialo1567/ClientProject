import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebPortalViewModel } from 'src/app/api/models';
import { SubscriptionService, WebPortalService } from 'src/app/api/services';
import { AccountService } from 'src/app/api/services/account.service';
import { Cathegory } from 'src/app/model/cathegory';
import { Portal } from 'src/app/model/portal';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-add-portal',
  templateUrl: './add-portal.component.html',
  styleUrls: ['./add-portal.component.css']
})
export class AddPortalComponent implements OnInit {
  @Input() category?: Cathegory;

  portalForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder, 
    private accountService: AccountService, 
    private webPortalService: WebPortalService, 
    private subscriptionService: SubscriptionService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.portalForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })

  }

  addPortal() {
    let portal = <Portal> {
      ownerId:  this.accountService.currentUser?.id,
      cathegoryId: this.category?.id,
      name: this.portalForm?.value.name,
      description: this.portalForm?.value.description,
      users: [this.accountService.currentUser],
      posts: [
        <Post> {
          createDate: new Date(),
          name: 'Portal creation',
          text: 'Happyness'
        }
      ]
    };

    this.webPortalService.postApiWebPortals(<WebPortalViewModel><any>portal).subscribe((res) => {

      this.subscriptionService.postApiSubscription({
        userId: this.accountService.currentUser?.id,
        webPortalId: <string><any>res
      }).subscribe(res => {
        this.toastr.success("Portal successfully added");
        let user = this.accountService.currentUser;
        if(user) {
          user.role = 1;
          this.accountService.setCurrentUser(user);
        }
        window.location.reload();
      })
    })

  }
}
