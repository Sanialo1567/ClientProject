import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CathegoryListComponent } from './components/cathegory-list/cathegory-list.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { RegistrationComponent } from './components/log-reg/registration/registration.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PortalListComponent } from './components/portals/portal-list/portal-list.component';
import { PortalPageComponent } from './components/portals/portal-page/portal-page.component';
import { SearchPortalComponent } from './components/portals/search-portal/search-portal.component';
import { TyktykComponent } from './components/tyktyk/tyktyk.component';
import { LoginedGuard } from './guards/logined.guard';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [LoginedGuard],
    children: [
      { path: '', component: CathegoryListComponent},
      { path: 'portal/:id', component: PortalPageComponent},
      { path: 'search/:query', component: SearchPortalComponent},
      { path: 'notification', component: NotificationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
