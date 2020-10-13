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
import { ReactiveFormsModule } from '@angular/forms';

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
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    //NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
