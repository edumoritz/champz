import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "home",
		loadChildren: () =>
			import("./features/home/home.module").then((m) => m.HomeModule)
	},
	{
		path: "register-competitor",
		loadChildren: () =>
			import("./features/register-competitor/register-competitor.module").then((m) => m.RegisterCompetitorModule)
	},
	{
		path: "register-team",
		loadChildren: () =>
			import("./features/register-team/register-team.module").then((m) => m.RegisterTeamModule)
	},
	{
		path: "register-category",
		loadChildren: () =>
			import("./features/register-category/register-category.module").then((m) => m.RegisterCategoryModule)
	},
	{
		path: "**",
		redirectTo: "home"
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
