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
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutModule } from './theme/layout/layout.module';
import { SalesModule } from './modules/sales/sales.module';
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
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
