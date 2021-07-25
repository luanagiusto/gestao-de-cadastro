import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.css']
})
export class ClientsUpdateComponent implements OnInit {
  client: Client

  constructor(private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientsService.readById(id).subscribe((client) => {
      this.client = client;
    });
  }

  updateClient(): void {
    this.clientsService.update(this.client).subscribe(() => {
      this.clientsService.showMessage("Cliente atualizado com sucesso");
      this.router.navigate(["/clients"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clients"]);
  }

}
