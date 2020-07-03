import { Injectable } from '@angular/core';
import { Branch } from '../../models/branch';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root'
})

export class BranchService {

    addhUrl = '/branch/add';
    getByIdUrl = '/branch/get';
    getAllUrl = '/branch/get/allBranch';
    updateBranchUrl = '/branch/update';

    constructor(
        private httpService: HttpService
    ) { }

    public save(branch: Branch) {

        return this.httpService.postWithToken(this.addhUrl, branch);
    }

    public getAllBranch() {
        return this.httpService.getWithToken(this.getAllUrl);
    }

    public getBranchById(id: number) {
        return this.httpService.getWithToken(this.getByIdUrl+'/'+id);
    }

    public updateBranch(branch: Branch) {
        return this.httpService.postWithToken(this.updateBranchUrl,branch);
    }
}