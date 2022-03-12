import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NotificationService } from 'src/app/api/services';
import { AccountService } from 'src/app/api/services/account.service';
import { PostNotification } from 'src/app/model/notification';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  notifications: PostNotification[] = []

  constructor(
    private notificationService: NotificationService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    if(this.accountService.currentUser?.id) {
      this.notificationService.getApiNotificationUserId(this.accountService.currentUser?.id).subscribe(res => {
        console.log(res)
        if((<any>res)[0] !== null) {
          this.notifications = (<PostNotification[]><any>res).filter(x => x.userId === this.accountService.currentUser?.id);
        }
      })

    }
  }

}
