import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { ClientsComponent } from './views/client-crud/clients.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/product-crud/products.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/create",
    component: ProductsCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductsUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductsDeleteComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "clients/create",
    component: ClientsCreateComponent
  },
  {
    path: "clients/update/:id",
    component: ClientsUpdateComponent
  },
  {
    path: "clients/delete/:id",
    component: ClientsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
