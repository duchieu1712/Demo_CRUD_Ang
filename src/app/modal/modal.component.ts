import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  template: 'passed in {{ data }}'
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<any>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  onClose(data:any): void {
    this.dialogRef.close(data);
  }
}
