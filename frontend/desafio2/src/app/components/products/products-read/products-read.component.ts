import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.read().subscribe(products => {
      this.products = products;
    })
  }

}
