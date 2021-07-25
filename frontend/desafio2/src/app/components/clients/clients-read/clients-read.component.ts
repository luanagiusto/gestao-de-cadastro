import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.css']
})
export class ClientsReadComponent implements OnInit {

  client: Client[]
  displayedColumns = ['id', 'name', 'lastname', 'email', 'password', 'actions']

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.read().subscribe(client => {
      this.client = client;
    })
  }
}
