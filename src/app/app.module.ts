import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CattleDealsComponent } from './components/cattle-deals/cattle-deals.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './sec/comp/login/login.component';
import { RegisterComponent } from './sec/comp/register/register.component';
import { HomeComponent } from './sec/comp/home/home.component';
import { ProfileComponent } from './sec/comp/profile/profile.component';
import { BoardAdminComponent } from './sec/comp/board-admin/board-admin.component';
import { BoardModComponent } from './sec/comp/board-mod/board-mod.component';
import { BoardUserComponent } from './sec/comp/board-user/board-user.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CattleViewComponent } from './components/sidebar/cattle-view/cattle-view.component';
import { TaskViewComponent } from './components/sidebar/task-view/task-view.component';
import { SearchComponent } from './components/search/search.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TasksComponent,
    CattleDealsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModComponent,
    BoardUserComponent,
    ImageUploadComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutPageComponent,
    PageNotFoundComponent,
    CattleViewComponent,
    TaskViewComponent,
    SearchComponent,
    AboutUsComponent,
    ContactUsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
