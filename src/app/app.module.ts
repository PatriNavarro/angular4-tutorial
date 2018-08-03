import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import {ProjectListService} from './auth/project-list/services/project-list.service';
import { LoginComponent } from './public/login/login.component';
import {routes} from './routes';
import { HomeComponent } from './auth/home/home.component';
import { AuthenticationService} from './common/services/authentication.service';
import {HttpService} from './common/services/http.service';
import {AuthGuard} from './common/guards/auth.guard';
import {PublicGuard} from './common/guards/public.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SortingComponent } from './common/sorting/sorting.component';

import {Ng2Webstorage} from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2Webstorage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProjectListService,
    AuthenticationService,
    HttpService,
    AuthGuard, PublicGuard // Guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
