import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { CourseService } from '../../_services/module_service/course.service'
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 courseForm: FormGroup;
 submitted = false;
 courseList: Observable<Course[]>;
 closeResult: string;
 isUpdated = false;
 courseValue: any;
 updateSubmitted = false;
 updateCourse: Course;
 updateMessage: any;

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService,
              private messageService: MessageService,
              private modalService: NgbModal) {}

  ngOnInit() {
  this.resetAddFormField();
  this.getAllCourse();
   // form validation
      this.courseForm = this.formBuilder.group({
        name: ['', [Validators.required]]
      });
  }

 //reset Admin User Form Field
  resetAddFormField() {
    this.courseForm = this.formBuilder.group({
      name: ['']

    });
  }

   /* insert Course */
    insertCourse(): void {

      // stop here if form is invalid
      this.submitted = true;
      if (this.courseForm.invalid) {
       console.log("Invalide");
        return;
      }
        this.courseService.save(this.courseForm.value).subscribe(res => {
            this.messageService.add(res.message);
            if (res.status == 'ok') {
              this.getAllCourse();
              this.resetAddFormField();
            }

          })
      }

      //get all Course
        getAllCourse() {
          this.courseService.getAllCourse().subscribe(res => {
            this.courseList = res;
          })
        }

 // get course by id
  getCourseById(id: number) {

    this.courseService.getCourseById(id).subscribe(data => {
      this.courseValue = data;
    });
  }


   // form validation
    updateCourseForm = this.formBuilder.group({
      course_id: ['', [Validators.required]],
      course_name: ['', [Validators.required]]
    });

    //update course
      updateCourseValue() {
        // stop here if form is invalid
        this.updateSubmitted = true;
        if (this.updateCourseForm.invalid) {
          return;
        }
        this.updateCourse = new Course();
        this.updateCourse.id = this.updateCourseForm.get("course_id").value;
        this.updateCourse.name = this.updateCourseForm.get("course_name").value;
        this.courseService.updateCourse(this.updateCourse).subscribe(res => {

          if (res.status == 'ok') {
            this.isUpdated = true;
            this.updateMessage = res.message;
            this.getAllCourse();
          } else if (res.status == 'failed') {
            this.isUpdated = true;
            this.updateMessage = res.message;
            this.getAllCourse();
          }
        });
      }

    /* for popup OK,close Button */
      open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.isUpdated = false;
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

        private getDismissReason(reason: any): string {
          if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return `with: ${reason}`;
          }
        }

      /* end popup */
}
