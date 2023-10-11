import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pra1Component } from './pra1/pra1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './para2/cart/cart.component';
import { ShoppingCenterComponent } from './para2/shopping-center/shopping-center.component';
import { ProductComponent } from './para2/product/product.component';
import { Para2Component } from './para2/para2/para2.component';
import { TopBarComponent } from './para2/top-bar/top-bar.component';
import { Form2Component } from './para2/form2/form2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatComponent } from './mat/mat.component';



@NgModule({
  declarations: [
    AppComponent,
    Pra1Component,
    FormComponent,
    MainComponent,
    CartComponent,
    ShoppingCenterComponent,
    ProductComponent,
    Para2Component,
    TopBarComponent,
    Form2Component,
    MatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
