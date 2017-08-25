import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { AdvertisementModule } from './advertisement/advertisement.module';

// Services
import { AuthService } from './firebase/auth.service';

// Firebase modules
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Routes components
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RoutingModule,
    AdvertisementModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
