import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCategoryComponent } from './register-category.component';

const routes: Routes = [
	{
		path: "",
		component: RegisterCategoryComponent,
	}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterCategoryComponent]
})
export class RegisterCategoryModule { }
