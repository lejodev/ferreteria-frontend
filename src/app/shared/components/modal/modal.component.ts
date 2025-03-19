import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal',  // ✅ Fixed: Unique selector
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.sass']
})
export class ModalComponent {
  animal!: string;
  name!: string;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal = result;
      }
    });
  }
}

/**
 * Dialog Component
 */
@Component({
  selector: 'app-dialog-overview',  // ✅ Fixed: Unique selector
  template: `
    <h2 mat-dialog-title>Hi, {{ data.name }}</h2>
    <mat-dialog-content>
      <p>Pick an animal:</p>
      <mat-form-field>
        <mat-label>Animal</mat-label>
        <input matInput [(ngModel)]="data.animal">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.animal">Ok</button>
    </mat-dialog-actions>
  `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
