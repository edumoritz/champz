import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.scss']
})
export class MySidebarComponent implements OnInit {
  display = false;

  routes: any[] = [];
  selectedRoute: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.routes = [
      {label: 'Home', routerLink: '/home'},
      {label: 'Cadastro de competidores', routerLink: '/register-competitor'},
      {label: 'Cadastro de academias', routerLink: '/register-team'},
      {label: 'Cadastro de categorias', routerLink: '/register-category'}
    ]
  }

  navigate() {
    this.display = false;
    this.router.navigate([this.selectedRoute.routerLink]);
  }

}
