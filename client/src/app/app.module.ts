import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyktykComponent } from './components/tyktyk/tyktyk.component';
import { PortalListComponent } from './components/portals/portal-list/portal-list.component';
import { PortalPageComponent } from './components/portals/portal-page/portal-page.component';
import { CathegoryListComponent } from './components/cathegory-list/cathegory-list.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/log-reg/text-input/text-input.component';
import { RegistrationComponent } from './components/log-reg/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddCategoryComponent } from './components/cathegory-list/add-category/add-category.component';
import { RoleDirective } from './directives/role.directive';
import { SearchPortalComponent } from './components/portals/search-portal/search-portal.component';
import { EditCategoryComponent } from './components/cathegory-list/edit-category/edit-category.component';
import { AddPortalComponent } from './components/portals/add-portal/add-portal.component';
import { AddPostComponent } from './components/portals/portal-page/add-post/add-post.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TyktykComponent,
    PortalListComponent,
    PortalPageComponent,
    CathegoryListComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    TextInputComponent,
    AddCategoryComponent,
    RoleDirective,
    SearchPortalComponent,
    EditCategoryComponent,
    AddPortalComponent,
    AddPostComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
