import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization';
import { HttpService } from '../_services/http.service';



@Injectable({
  providedIn: 'root'
})

export class OrganizationService {
  saveUrl = '/organization/add';
  getAllUrl ='/organization/getAllOrgniz';
  updateUrl = '/organization/update';
 

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  public save(organization: Organization) {

    return this.httpService.postWithToken(this.saveUrl, organization);
  }

  public getAll() {

    return this.httpService.getWithToken(this.getAllUrl);
  }
}    