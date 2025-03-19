import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Import Angular Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ✅ Import the modal component
import { DialogOverviewExampleDialog, ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent,  // ✅ Declare the modal component
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ModalComponent  // ✅ Export it so it can be used in other modules
  ]
})
export class ModalModule { }
