import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { RegisterCompetitorComponent } from './register-competitor.component';

const routes: Routes = [
	{
		path: "",
		component: RegisterCompetitorComponent,
	}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    ScrollingModule,
    AutoCompleteModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterCompetitorComponent]
})
export class RegisterCompetitorModule { }
