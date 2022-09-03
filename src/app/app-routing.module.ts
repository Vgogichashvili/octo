import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';
import { LoginGuard } from './guards/login.guard';
import { PasswordResetComponent } from './users/password-reset/password-reset.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';

import { CreateComponent } from './views/create/create.component';
import { HeaderComponent } from './views/create/header/header.component';
import { MainInfoComponent } from './views/create/header/house-information/main-info/main-info.component';
import { HomeComponent } from './views/create/home/home.component';
import { HouseListingComponent } from './views/create/house-listing/house-listing.component';

const routes: Routes = [
   {path:"",component:HeaderComponent},
  {path:'create',canActivate:[GuardGuard],component:CreateComponent},
  // {path:'update/:key',canActivate:[GuardGuard],component:UpdateComponent},
  // {path:'',canActivate:[GuardGuard],component:HomeComponent},
  {path:'user-login',canActivate:[LoginGuard],component:UserLoginComponent},
  {path:'user-registration',canActivate:[LoginGuard],component:UserRegistrationComponent},
  {path:'password-reset',canActivate:[LoginGuard],component:PasswordResetComponent},
  {path:"house-listing",canActivate:[GuardGuard], component:HouseListingComponent},
  {path:"house-information/:key'",canActivate:[GuardGuard],component:MainInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
