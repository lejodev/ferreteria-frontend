import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './modules/products/products.module';
// import { LayoutComponent } from './theme/layout/layout.component';
// import { NavbarComponent } from './theme/layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutModule } from './theme/layout/layout.module';
import { SalesModule } from './modules/sales/sales.module';
import { SharedModule } from './shared/shared.module';
import { StockModule } from './modules/stock/stock.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { BaseComponent } from './theme/layout/base/base.component';
// import { FooterComponent } from './theme/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutComponent,
    // NavbarComponent,
    // BaseComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    DashboardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule,
    LayoutModule,
    SalesModule,
    SharedModule,
    StockModule,
    ModalModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
