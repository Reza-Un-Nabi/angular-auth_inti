import { Injectable } from '@angular/core';
import { EmailTemplate } from '../../models/emailTemplate';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})

export class EmailTemplateService {

    addhUrl = '/emailTemplate/add';
    getByIdUrl = '/emailTemplate/get';
    getAllUrl = '/emailTemplate/get/allEmailTemp';

    constructor(
        private httpService: HttpService
    ) { }

    public save(emailTemplate: EmailTemplate) {

        return this.httpService.postWithToken(this.addhUrl, emailTemplate);
    }

    public getAllEmailTemplate() {

        return this.httpService.getWithToken(this.getAllUrl);
    }

    public getEmailTemplateById(id: number) {
        return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
    }
}