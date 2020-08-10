import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { University } from '../../models/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  saveUniversityUrl = '/university/add';
  allUniversityUrl = '/university/getAllUniversity';
  singleUniversityUrl = '/university/get';
  updateUrl = '/university/update';
  deleteUrl = '/university/delete';

  constructor(
    private httpService: HttpService
  ) { }

  public save(university: University) {

    return this.httpService.postWithToken(this.saveUniversityUrl, university);
  }

  public getAllUniversity() {
    return this.httpService.getWithToken(this.allUniversityUrl);
  }

  public singleUniversity(id:number) {
    return this.httpService.getWithToken(this.singleUniversityUrl+'/'+id);
  }
  public updateUniversity(university: University){
    return this.httpService.postWithToken(this.updateUrl,university);
  }

  public deleteUniversity(id: number) {
    return this.httpService.deleteWithToken(this.deleteUrl+'/'+id);
  }
}
