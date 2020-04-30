import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudenPopupComponent } from '../studen-popup/studen-popup.component';



@Component({
  selector: 'app-student-tracker-students',
  templateUrl: './student-tracker-students.component.html',
  styleUrls: ['./student-tracker-students.component.css']
})

export class StudentTrackerStudentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
//for Popup

openDialog(): void {
  const dialogRef = this.dialog.open(StudenPopupComponent, {
    width: '250px',
    //data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });
}




  displayedColumns: string[] = ['select','entrydate', 'name', 'EmailMobileNo', 'Country','CourseIntake','SourceStatus','IDPassword','User','Comment','AssignedTo','Stage','Action'];
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
  EmailMobileNo: string;
  Mobile: string;
  Country: string;
  CourseIntake: string;
  SourceStatus: string;
  IDPassword: string;
  User: string;
  Comment:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {entrydate: '1/02/2020', name: 'Hydrogen', EmailMobileNo:'test@yahoo.com',Mobile:'0412865328', Country: 'Spain',CourseIntake:'BBA',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Madhu',Comment:'NO IELTS yet'},
  {entrydate: '12/02/2020', name: 'Helium', EmailMobileNo:'test@yahoo.com ', Mobile:'0412865328',Country: 'Australia',CourseIntake:'B.Sc', SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '29/02/2020', name: 'Lithium',EmailMobileNo:'test@yahoo.com ', Mobile:'0412865328',Country: 'New Zealand',CourseIntake:'BBA', SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Madhu',Comment:'NO IELTS yet'},
  {entrydate: '2/03/2020', name: 'Beryllium', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'Master In Computer Engineering September-2020',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '9/03/2020', name: 'Boron', EmailMobileNo:'test@yahoo.com ', Mobile:'0412865328',Country: 'N/A',CourseIntake:'BBA',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '11/03/2020', name: 'Carbon', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'M.Sc', SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '17/03/2020', name: 'Nitrogen', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'N/A',CourseIntake:'EEE',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '17/03/2020', name: 'Oxygen',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'N/A',CourseIntake:'English', SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Admin',Comment:'NO IELTS yet'},
  {entrydate: '18/03/2020', name: 'Fluorine', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'Master In Computer Engineering September-2020',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '15/03/2020', name: 'Neon',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'UK',CourseIntake:'Master In Computer Engineering September-2020',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '19/03/2020', name: 'Sodium',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'English',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '23/03/2020', name: 'Magnesium', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'New Zealand,Spain',CourseIntake:'Master In Computer Engineering September-2020',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '126/03/2020', name: 'Aluminum',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'English',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '1/04/2020', name: 'Silicon', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'New Zealand,Spain',CourseIntake:'Master In Computer Engineering September-2020',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Admin',Comment:'NO IELTS yet'},
  {entrydate: '1/04/2020', name: 'Phosphorus', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'English',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Abhi',Comment:'NO IELTS yet'},
  {entrydate: '4/04/2020', name: 'Sulfur', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'UK',CourseIntake:'M.Sc',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '5/04/2020', name: 'Chlorine',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'B.Sc',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '6/04/2020', name: 'Argon',EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'UK',CourseIntake:'EEE',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Admin',Comment:'NO IELTS yet'},
  {entrydate: '10/04/2020', name: 'Potassium', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'Australia',CourseIntake:'BBA',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Vijaya',Comment:'NO IELTS yet'},
  {entrydate: '14/04/2020', name: 'Calcium', EmailMobileNo:'test@yahoo.com ',Mobile:'0412865328', Country: 'New Zealand,Spain',CourseIntake:'BBA',SourceStatus:'Facebook Student', IDPassword:'Alt0259 07a31225',User:'Abhi',Comment:'NO IELTS yet'}
];