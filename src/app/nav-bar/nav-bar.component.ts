import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransService } from '../services/data-trans.service';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  ovaData : any;
  constructor(private dataTrans: DataTransService, private router: Router, private nodeConfigService: NodeConfigService) { }

  ngOnInit(): void {
    this.configOva();
  }
  
  onClickLogout() {
    localStorage.setItem('isLogged', "no");
    this.router.navigate(['']);
  }

  onNav() {
    this.dataTrans.setUpdate(false)
  }

  configOva() {
    this.nodeConfigService.getOvaList().subscribe((response: any) => {
      this.ovaData = response;
      this.dataTrans.setOvaData(this.ovaData);
    });
  }
}
