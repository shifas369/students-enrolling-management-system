import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ApiService } from './api.service';






@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    EditFormComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,

    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
