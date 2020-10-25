import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpComponent } from './components/help/help.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { BoardAdminComponent } from './sec/comp/board-admin/board-admin.component';
import { BoardModComponent } from './sec/comp/board-mod/board-mod.component';
import { BoardUserComponent } from './sec/comp/board-user/board-user.component';
import { HomeComponent } from './sec/comp/home/home.component';
import { LoginComponent } from './sec/comp/login/login.component';
import { ProfileComponent } from './sec/comp/profile/profile.component';
import { RegisterComponent } from './sec/comp/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'taskses', component: TasksComponent },
  { path: 'taskses/:tid', component: TaskViewComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'image-upload', component: ImageUploadComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }