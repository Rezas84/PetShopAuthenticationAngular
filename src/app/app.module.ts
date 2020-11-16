import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import {PetService} from './services/pet.service';
import {PetItemComponent} from './pet/petItem.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PetItemComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PetService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
