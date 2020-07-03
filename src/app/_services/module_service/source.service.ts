import { Injectable } from '@angular/core';
import { Source } from '../../models/source';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})

export class SourceService {

    addhUrl = '/source/add';
    getByIdUrl = '/source/get';
    getAllUrl = '/source/get/allSource';
    updateSourceUrl = '/source/update';

    constructor(
        private httpService: HttpService
    ) { }

    public save(source: Source) {

        return this.httpService.postWithToken(this.addhUrl, source);
    }

    public getAllSource() {

        return this.httpService.getWithToken(this.getAllUrl);
    }

    public getSourceById(id: number) {
        return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
    }

    public updateSource(source: Source) {
        return this.httpService.postWithToken(this.updateSourceUrl,source);
    }
}