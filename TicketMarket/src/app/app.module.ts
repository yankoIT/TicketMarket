import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './event/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventModule } from './event/event/event.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EventModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
