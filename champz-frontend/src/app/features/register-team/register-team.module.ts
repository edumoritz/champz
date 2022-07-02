import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterTeamComponent]
})
export class RegisterTeamModule { }
