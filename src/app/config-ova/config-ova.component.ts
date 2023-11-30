import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfigOvaDialogueComponent } from '../shared/config-ova-dialogue/config-ova-dialogue.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataTransService } from '../services/data-trans.service';
import { NodeConfigService } from '../services/node-config.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-config-ova',
  templateUrl: './config-ova.component.html',
  styleUrls: ['./config-ova.component.css']
})
export class ConfigOvaComponent implements OnInit {
  displayedColumns: string[] = ['rp_code', 'ova', 'sp_code', 'edit'];
  dataSource: MatTableDataSource<any>;
  selectedRow: any;
  getOvaList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog, private dataTransService: DataTransService, private nodeConfigService: NodeConfigService) { }

  ngOnInit(): void {

    let allData = this.dataTransService.getOvaData();
    this.dataSource = new MatTableDataSource(allData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllData() {

    // return this.nodeConfigService.getOvaList().subscribe((response :any)=>{
    //   this.getOvaList = response;
    //   this.dataSource = new MatTableDataSource(response);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

    let allData = this.dataTransService.getOvaData();
    // this.dataSource = new MatTableDataSource(allData);
  }

  editNodeConfigTable(item: any, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ConfigOvaDialogueComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        'editNode': item
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      return this.nodeConfigService.getOvaList().subscribe((response: any) => {
        this.getOvaList = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        return this.nodeConfigService.getOvaList().subscribe((response: any) => {
          this.getOvaList = response;
          this.dataSource = new MatTableDataSource(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ConfigOvaDialogueComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      return this.nodeConfigService.getOvaList().subscribe((response: any) => {
        this.getOvaList = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
}
