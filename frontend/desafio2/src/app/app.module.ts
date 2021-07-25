import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './views/client-crud/clients.component';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { ProductsComponent } from './views/product-crud/products.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import localePt from '@angular/common/locales/pt' // para mostrar separadores em pt da localizaçao do br
import { registerLocaleData } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt); // para mostrar separadores em pt da localizaçao do br

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsCreateComponent,
    ClientsDeleteComponent,
    ClientsReadComponent,
    ClientsUpdateComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsDeleteComponent,
    ProductsReadComponent,
    ProductsUpdateComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-br' // para mostrar separadores em pt da localizaçao do br
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
