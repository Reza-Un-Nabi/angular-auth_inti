import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-paid-invoices',
  templateUrl: './paid-invoices.component.html',
  styleUrls: ['./paid-invoices.component.css']
})
export class PaidInvoicesComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['invoiceId','entrydate', 'name', 'email', 'mobile','discount','invoiceAmount','totalGst','paid','outSanding','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.entrydate + 1}`;
  }

  
}


export interface PeriodicElement {
  invoiceId : number;
  entrydate: string;
  name: string;
  email: string;
  mobile:string;
  discount:number;
  invoiceAmount:number;
  totalGst:number;
  paid:number;
  outSanding:number;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  {invoiceId:10,entrydate: '1/02/2020', name: 'Hydrogen', email:'test@yahoo.com',mobile:'0412865328',discount:20,invoiceAmount:440,totalGst:0.00,paid:440,outSanding:440 },
  {invoiceId:110,entrydate: '12/02/2020', name: 'Helium', email:'test@yahoo.com ', mobile:'0412865328',discount:30,invoiceAmount:540,totalGst:0.00,paid:250,outSanding:540 },
  {invoiceId:111,entrydate: '29/02/2020', name: 'Lithium',email:'test@yahoo.com ',mobile:'0412865328',discount:20,invoiceAmount:340,totalGst:30.00,paid:370,outSanding:370 },
  {invoiceId:50,entrydate: '2/03/2020', name: 'Beryllium', email:'test@yahoo.com', mobile:'0412865328',discount:20,invoiceAmount:440,totalGst:0.00,paid:440,outSanding:440 },
  {invoiceId:1,entrydate: '9/03/2020', name: 'Boron', email:'test@yahoo.com ',mobile:'0412865328',discount:20,invoiceAmount:440,totalGst:0.00,paid:440,outSanding:440 }
];