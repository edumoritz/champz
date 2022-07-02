import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySidebarModule } from './sidebar/sidebar/my-sidebar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    MySidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
