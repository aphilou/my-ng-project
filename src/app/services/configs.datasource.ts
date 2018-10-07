
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ConfigsService } from "./configs.service";
import { ConfigHisto } from "../model/config.histo";
import { of } from "rxjs";


export class ConfigHistoDataSource implements DataSource<ConfigHisto> {

    private configHistoSubject = new BehaviorSubject<ConfigHisto[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    totalPages: number;
    totalElements: number;

    constructor(private configsService: ConfigsService) {

    }

    loadConfigHisto(termId:string,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.configsService.findConfigs(termId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(configs => {
                console.log("configHisto = ", configs);
                this.totalElements = configs.totalElements;
                this.totalPages = configs.totalPages;
                this.configHistoSubject.next(configs.items);
            });

    }

    connect(collectionViewer: CollectionViewer): Observable<ConfigHisto[]> {
        console.log("Connecting data source");
        return this.configHistoSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        console.log("Disconnecting data source");
        this.configHistoSubject.complete();
        this.loadingSubject.complete();
    }

}

