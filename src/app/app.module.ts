import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CattleDealsComponent } from './components/cattle-deals/cattle-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TasksComponent,
    CattleDealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
