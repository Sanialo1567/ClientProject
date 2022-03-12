/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CathegoryService } from './services/cathegory.service';
import { NotificationService } from './services/notification.service';
import { PostService } from './services/post.service';
import { SubscriptionService } from './services/subscription.service';
import { UserService } from './services/user.service';
import { WebPortalService } from './services/web-portal.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CathegoryService,
    NotificationService,
    PostService,
    SubscriptionService,
    UserService,
    WebPortalService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
