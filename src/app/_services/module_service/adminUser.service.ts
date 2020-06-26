import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AdminUser} from '../../models/adminUser';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
  })

  export class AdminUserService {
    organigationListUrl = '/organization/orgName';
    signupUrl = '/auth/signup';
    allAdminUserUrl = '/auth/allAdmin';
    constructor(
        private http: HttpClient,
        private httpService: HttpService
      ) { }
    
public getAllOrganization () {
    return this.httpService.getWithToken(this.organigationListUrl);
}

public saveUser (user: AdminUser) {
  return this.httpService.postWithToken(this.signupUrl,user);
}

public getAllAdminUser (){
return  this.httpService.getWithToken(this.allAdminUserUrl);
}

  }