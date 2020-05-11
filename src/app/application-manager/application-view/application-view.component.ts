import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['select','entrydate', 'name', 'email', 'Mobile','User','Total_application'];
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
  User: string;
  Total_application: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {entrydate: '1/02/2020', name: 'Hydrogen', email:'test@yahoo.com',Mobile:'0412865328',User:"Admin", Total_application:'4'},
  {entrydate: '12/02/2020', name: 'Helium', email:'test@yahoo.com ', Mobile:'0412865328',User:"Jack",Total_application:'3'},
  {entrydate: '29/02/2020', name: 'Lithium',email:'test@yahoo.com ', Mobile:'0412865328',User:"Mickel",Total_application:'2'},
  {entrydate: '2/03/2020', name: 'Beryllium', email:'test@yahoo.com ',Mobile:'0412865328', User:"Mickel",Total_application:'2'},
  {entrydate: '9/03/2020', name: 'Boron', email:'test@yahoo.com ', Mobile:'0412865328',User:"Admin",Total_application:'2'},
  {entrydate: '11/03/2020', name: 'Carbon', email:'test@yahoo.com ',Mobile:'0412865328', User:"Jack",Total_application:'1'},
  {entrydate: '17/03/2020', name: 'Nitrogen', email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin", Total_application:'1'},
  {entrydate: '17/03/2020', name: 'Oxygen',email:'test@yahoo.com ',Mobile:'0412865328', User:"Jack",Total_application:'5'},
  {entrydate: '18/03/2020', name: 'Fluorine', email:'test@yahoo.com ',Mobile:'0412865328', User:"Admin",Total_application:'2'},
  {entrydate: '15/03/2020', name: 'Neon',email:'test@yahoo.com ',Mobile:'0412865328', User:"Mohit",Total_application:'2'},
  {entrydate: '19/03/2020', name: 'Sodium',email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin", Total_application:'2'},
  {entrydate: '23/03/2020', name: 'Magnesium', email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin", Total_application:'2'},
  {entrydate: '126/03/2020', name: 'Aluminum',email:'test@yahoo.com ',Mobile:'0412865328',User:"Jamal",Total_application:'2'},
  {entrydate: '1/04/2020', name: 'Silicon', email:'test@yahoo.com ',Mobile:'0412865328', User:"Admin",Total_application:'3'},
  {entrydate: '1/04/2020', name: 'Phosphorus', email:'test@yahoo.com ',Mobile:'0412865328',User:"Amit", Total_application:'3'},
  {entrydate: '4/04/2020', name: 'Sulfur', email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin", Total_application:'3'},
  {entrydate: '5/04/2020', name: 'Chlorine',email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin",Total_application:'5'},
  {entrydate: '6/04/2020', name: 'Argon',email:'test@yahoo.com ',Mobile:'0412865328',User:"Mickel", Total_application:'5'},
  {entrydate: '10/04/2020', name: 'Potassium', email:'test@yahoo.com ',Mobile:'0412865328',User:"Jack", Total_application:'5'},
  {entrydate: '14/04/2020', name: 'Calcium', email:'test@yahoo.com ',Mobile:'0412865328',User:"Admin", Total_application:'4'}
];