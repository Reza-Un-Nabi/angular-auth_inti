import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
addhUrl = '/course/add';
getByIdUrl = '/course/get';
getAllUrl = '/course/get/allCourse';
updateCourseUrl = '/course/update';


   constructor(
          private httpService: HttpService
      ) { }

   public save(course: Course) {
     return this.httpService.postWithToken(this.addhUrl, course);
   }
   public getAllCourse() {
           return this.httpService.getWithToken(this.getAllUrl);
   }
    public getCourseById(id: number) {
           return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
   }
    public updateCourse(course: Course) {
          return this.httpService.postWithToken(this.updateCourseUrl,course);
   }
}
