import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { ConfigHistoDataSource } from '../services/configs.datasource';
import { ActivatedRoute } from '@angular/router';
import { ConfigsService } from '../services/configs.service';
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  //dataSource: TableDataSource;
  dataSource: ConfigHistoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['id', 'name'];
  displayedColumns = ['id', 'termId', 'configType', 'pkg', 'verCode', 'updateDate'];

  constructor(private route: ActivatedRoute,
              private configsService: ConfigsService) {
    console.log("constructor in TableComponent");
  }

  ngOnInit() {
    console.log("ngOnInit in TableComponent");
    //this.dataSource = new TableDataSource(this.paginator, this.sort);
    this.dataSource = new ConfigHistoDataSource(this.configsService);

    this.dataSource.loadConfigHisto('500', '', 'asc', 1, 3);
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => this.loadConfigsPage())
    )
    .subscribe();

  }

  loadConfigsPage() {
      this.dataSource.loadConfigHisto(
          '500',
          '',
          this.sort.direction,
          this.paginator.pageIndex+1,
          this.paginator.pageSize);
  }

}
