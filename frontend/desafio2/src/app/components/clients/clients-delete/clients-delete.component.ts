import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';


@Component({
  selector: 'app-clients-delete',
  templateUrl: './clients-delete.component.html',
  styleUrls: ['./clients-delete.component.css']
})
export class ClientsDeleteComponent implements OnInit {

  client: Client

  constructor(private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientsService.readById(id).subscribe(client => {
      this.client = client

    })
  }

  deleteClient(): void {
    this.clientsService.delete(this.client.id).subscribe(() => {
      this.clientsService.showMessage("Cliente excluído com sucesso");
      this.router.navigate(["/clients"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clients"]);
  }
}
