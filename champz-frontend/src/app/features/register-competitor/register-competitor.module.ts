import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterCompetitorComponent]
})
export class RegisterCompetitorModule { }
