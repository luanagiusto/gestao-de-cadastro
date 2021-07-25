import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerDataC = {
        title: 'Cadastro de Clientes',
        icon: 'face',
        routeUrl: '/clients'
      }
     }

  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/clients/create'])
  }
}
