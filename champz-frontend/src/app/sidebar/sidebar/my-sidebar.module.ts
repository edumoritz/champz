
import { SidebarModule } from 'primeng/sidebar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySidebarComponent } from './my-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    FormsModule
  ],
  exports: [MySidebarComponent],
  declarations: [MySidebarComponent]
})
export class MySidebarModule { }
