import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { ProfileDetailsComponent } from './components/profile/profile-details/profile-details.component';
import { UpdateUserDetailsComponent } from './components/user/update-user-details/update-user-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  {path:'user-details',component:UserDetailsComponent},
  {
    path:'profile-details',component:ProfileDetailsComponent
  },
  {
    path:'update-user',component:UpdateUserDetailsComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
