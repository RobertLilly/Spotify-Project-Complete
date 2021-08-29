import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AddHeaderInterceptor} from './interceptor/AddHeaderInterceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    AutocompleteLibModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
   
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
  },SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
