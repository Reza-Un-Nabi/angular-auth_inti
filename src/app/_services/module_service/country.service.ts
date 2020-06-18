import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  saveCountryUrl = '/country/add';
  getAllCountryUrl = '/country/getAllCountry';
  updateCountryUrl = '/country/update';


  constructor(
    private httpService: HttpService
  ) { }
  
  public save(country: Country) {

    return this.httpService.postWithToken(this.saveCountryUrl, country);
  }

  public getAllCountry() {

    return this.httpService.getWithToken(this.getAllCountryUrl);
  }

  public getCountryById(id: number) {
    return this.httpService.getWithToken('/country/' + id);
  }

  public updateCountry(country: Country) {
    return this.httpService.postWithToken(this.updateCountryUrl,country);
  }
}  