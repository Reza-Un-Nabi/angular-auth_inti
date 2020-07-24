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

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService,
              private messageService: MessageService) {}

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

}
