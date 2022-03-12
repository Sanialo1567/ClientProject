import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccountService } from '../api/services/account.service';
import { Role } from '../model/role';
import { User } from '../model/user';

@Directive({
  selector: '[appRole]',
})
export class RoleDirective {
  @Input() appRole: Role[] = [];
  user: User | undefined;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) {
    this.user = this.accountService.currentUser;
  }

  ngOnInit(): void {
    let user = this.accountService.currentUser;
    
    if (user && this.appRole.includes(user.role)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
