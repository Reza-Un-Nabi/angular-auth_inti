import { Injectable } from '@angular/core';
import { SmsTemplate } from '../../models/smsTemplate';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})

export class BranchService {

    addhUrl = '/smsTemplate/add';
    getByIdUrl = '/smsTemplate/get';
    getAllUrl = '/smsTemplate/get/allSmsTemp';

    constructor(
        private httpService: HttpService
    ) { }

    public save(smsTemplate: SmsTemplate) {

        return this.httpService.postWithToken(this.addhUrl, smsTemplate);
    }

    public getAllSmsTemplate() {

        return this.httpService.getWithToken(this.getAllUrl);
    }

    public getSmsTemplateById(id: number) {
        return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
    }
}