import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BoardAdminComponent } from './sec/comp/board-admin/board-admin.component';
import { BoardModComponent } from './sec/comp/board-mod/board-mod.component';
import { BoardUserComponent } from './sec/comp/board-user/board-user.component';
import { HomeComponent } from './sec/comp/home/home.component';
import { LoginComponent } from './sec/comp/login/login.component';
import { ProfileComponent } from './sec/comp/profile/profile.component';
import { RegisterComponent } from './sec/comp/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
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