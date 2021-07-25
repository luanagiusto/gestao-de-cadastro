import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {

    name: '',
    price: null
  }


  constructor(private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
