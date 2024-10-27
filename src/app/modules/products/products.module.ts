import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdsListComponent } from './components/prods-list/prods-list.component';



@NgModule({
  declarations: [
    ProdsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProdsListComponent]
})
export class ProductsModule { }
