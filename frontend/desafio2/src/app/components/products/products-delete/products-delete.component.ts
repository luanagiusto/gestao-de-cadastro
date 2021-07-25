import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  
product: Product

  constructor(private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.readById(id).subscribe(product => {
      this.product = product

    })
  }

  deleteProduct(): void {
    this.productsService.delete(this.product.id).subscribe(() => {
      this.productsService.showMessage("Produto excluído com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
