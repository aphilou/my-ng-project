
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ConfigHisto } from "../model/config.histo";
import { map, tap } from "rxjs/operators";


@Injectable()
export class ConfigsService {

    constructor(private http:HttpClient) {

    }

    findConfigs(
        termId:string, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<any> {

        return this.http.get(`/dls-backend/rest/dls/config/configs/history/term/${termId}`, {
            params: new HttpParams()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString()),
            headers: new HttpHeaders()
                .set('accept', 'application/vnd.lotsys.dls.config.config.history.list-1+json')

        });
    }

}