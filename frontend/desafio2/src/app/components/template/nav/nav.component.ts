import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerDataP = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    },
    headerService.headerDataC = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  navigateToClientCreate(): void {
    this.router.navigate(['/clients/create'])
  }
}
