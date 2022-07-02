import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.scss']
})
export class MySidebarComponent implements OnInit {
  display = false;

  routes: any[] = [];
  selectedRoute: any;

  constructor() { }

  ngOnInit() {
    this.routes = [
      {label: 'Cadastro de competidores', routerLink: ['/pagename']},
      {label: 'Cadastro de academias', routerLink: ['/pagename']},
      {label: 'Cadastro de categorias', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
    ]
  }

}
