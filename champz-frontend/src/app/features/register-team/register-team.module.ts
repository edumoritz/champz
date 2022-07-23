import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { RegisterTeamComponent } from './register-team.component';

const routes: Routes = [
	{
		path: "",
		component: RegisterTeamComponent,
	}
];

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterTeamComponent]
})
export class RegisterTeamModule { }
