import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NodeConfigService } from '../services/node-config.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataTransService } from '../services/data-trans.service';
import { log } from 'console';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['partner_code', 'name', 'operator', 'currency', 'method', 'country', 'jar file', 'prefix', 'curbiCode', 'reference', 'jar_parameters', 'edit'];
  dataSource: MatTableDataSource<any>;
  selectedRow: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private dataTrans: DataTransService, private nodeConfigService: NodeConfigService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    let data = this.dataTrans.getPartners();

    if (data != undefined) {
      this.dataSource = new MatTableDataSource(data);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editNodeConfigTable(item: any): void {

    this.dataTrans.setUpdate(true);
    this.dataTrans.setUpdateData(item);
    this.router.navigate(['/nodeConfig'], {
      state: { item }
    });
  }

  openDeleteModal(row: any): void {
    this.selectedRow = row; 
  }

  deleteNodeConfigTable() {
    if (this.selectedRow) {

      let partnerCode = this.selectedRow.partnerCode;
      let method = this.selectedRow.method;      

      this.nodeConfigService.deleteNodeData(partnerCode,method).subscribe((res: any) => {

        this.dataTrans.setPartners(res.partnerList);
  
        let data = this.dataTrans.getPartners();
  
        if (data != undefined) {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
      this.selectedRow = null;
    }
    
  }
}
