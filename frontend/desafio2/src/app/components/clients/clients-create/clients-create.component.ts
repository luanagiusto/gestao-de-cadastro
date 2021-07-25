import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {
  client: Client = {

    name: '',
    lastname: '',
    email: '',
    password: ''

  }

  constructor(private clientsService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createClient(): void {
    this.clientsService.create(this.client).subscribe(() => {
      this.clientsService.showMessage('Cliente criado com sucesso!')
      this.router.navigate(['/clients']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
