import { Injectable } from '@angular/core';
import { CheckList } from '../../models/checkList';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})

export class CheckListService {

    addhUrl = '/checkList/add';
    getByIdUrl = '/checkList/get';
    getAllUrl = '/checkList/get/allCheckList';
    updateBranchUrl = '/checkList/update';
    constructor(
        private httpService: HttpService
    ) { }

    public save(checkList: CheckList) {

        return this.httpService.postWithToken(this.addhUrl, checkList);
    }

    public getAllcheckList() {

        return this.httpService.getWithToken(this.getAllUrl);
    }

    public getCheckListById(id: number) {
        return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
    }

    public updateCheckList(checkList: CheckList) {
        return this.httpService.postWithToken(this.updateBranchUrl,checkList);
    }
}