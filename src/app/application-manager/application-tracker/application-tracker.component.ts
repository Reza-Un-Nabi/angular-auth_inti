import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-application-tracker',
  templateUrl: './application-tracker.component.html',
  styleUrls: ['./application-tracker.component.css']
})
export class ApplicationTrackerComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['select','entrydate', 'name', 'email', 'Mobile','Country','Universities','Course','User','Total_application'];
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
  entrydate: string;
  name: string;
  email: string;
  Mobile:string;
  Country:string;
  Universities: string;
  Course: string;
  User: string;
  Total_application: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {entrydate: '1/02/2020', name: 'Hydrogen', email:'test@yahoo.com',Mobile:'0412865328',Country:'Australia, Australia, Australia, Australia',Universities:'Macquarie University, Southern Cross University, University of New England, University of New South Wales',Course:'BBA, BBA, BBA, BBA',User:"Admin", Total_application:'4'},
  {entrydate: '12/02/2020', name: 'Helium', email:'test@yahoo.com ', Mobile:'0412865328',Country:'Australia, New Zealand',Universities:'Southern Cross University, University of Auckland',Course:'MBA,MBA',User:"Jack",Total_application:'3'}
  
];