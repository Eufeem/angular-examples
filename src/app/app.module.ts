import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesService } from './services/places.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderStoreComponent } from './components/header-store/header-store.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { P1Component } from './components/p1/p1.component';
import { P2Component } from './components/p2/p2.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DataInputComponent } from './components/data-input/data-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderStoreComponent,
    ProductComponent,
    P1Component,
    P2Component,
    PrincipalComponent,
    AutocompleteComponent,
    DataInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AutocompleteLibModule,
    HttpClientModule,
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
