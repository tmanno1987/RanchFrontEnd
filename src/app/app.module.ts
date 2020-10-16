import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CattleDealsComponent } from './components/cattle-deals/cattle-deals.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
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

const routes: Routes = [
  {path: 'cattle-list', component: CattleDealsComponent},
  {path: '', redirectTo: '/cattle-list', pathMatch: 'full'},
  {path: '**', redirectTo: '/cattle-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TasksComponent,
    CattleDealsComponent,
    SigninPageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModComponent,
    BoardUserComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
