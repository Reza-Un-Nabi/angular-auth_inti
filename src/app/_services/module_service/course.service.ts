import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
addhUrl = '/course/add';
getAllUrl = '/course/get/allCourse';

   constructor(
          private httpService: HttpService
      ) { }

   public save(course: Course) {
     return this.httpService.postWithToken(this.addhUrl, course);
   }
   public getAllCourse() {
           return this.httpService.getWithToken(this.getAllUrl);
   }
}
