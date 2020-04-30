import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-studen-popup',
  templateUrl: './studen-popup.component.html',
  styleUrls: ['./studen-popup.component.css']
})
export class StudenPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<StudenPopupComponent>)
    {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 
    
}
