import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { CreateComponent } from './views/create/create.component';
import { HomeComponent } from './views/create/home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { PasswordResetComponent } from './users/password-reset/password-reset.component';
import { DialogComponent } from './views/create/home/dialog/dialog.component';
import { NgMaterialModule } from './ng-material.module';


import { HeaderComponent } from './views/create/header/header.component'; 
import { ExclusivesComponent } from './views/create/header/exclusives/exclusives.component';
import { CtaComponent } from './views/create/header/cta/cta.component'; 
import { TravellersStoriesComponent } from './views/create/header/travellers-stories/travellers-stories.component'; 
import { FooterComponent } from './views/create/header/footer/footer.component'; 
import { HouseListingComponent } from './views/create/house-listing/house-listing.component'; 
import { MainInfoComponent } from './views/create/header/house-information/main-info/main-info.component'; 
import { DetailsComponent } from './views/create/header/house-information/details/details.component'; 







@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    PasswordResetComponent,
    DialogComponent,
    HeaderComponent,
    ExclusivesComponent,
    CtaComponent,
    TravellersStoriesComponent,
    FooterComponent,
    HouseListingComponent,
    MainInfoComponent,
    DetailsComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
