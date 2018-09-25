import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { GotHttpService } from './got-http.service';
import { SortPipe } from './sort.pipe';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SortPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'details/:itemId',component:DetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]),

    NgxPopper
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
