import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { University } from '../../models/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
 saveUniversityUrl = '/university/add';

  constructor(
  private httpService: HttpService
  ) { }

   public save(university: University) {

      return this.httpService.postWithToken(this.saveUniversityUrl, university);
    }
}
