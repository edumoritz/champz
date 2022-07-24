import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySidebarModule } from './sidebar/my-sidebar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,    
    MySidebarModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
