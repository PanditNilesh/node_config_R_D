import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogueBoxTableComponent } from '../dialogue-box-table/dialogue-box-table.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { NodeConfigService } from '../services/node-config.service';
import { DataTransService } from '../services/data-trans.service';

@Component({
  selector: 'app-multi-factor-auth',
  templateUrl: './multi-factor-auth.component.html',
  styleUrls: ['./multi-factor-auth.component.css']
})
export class MultiFactorAuthComponent implements OnInit,AfterViewInit {
  userEmail    : any;
  showErrorMsg : boolean = false;
  allData      : any;
  statusCode   : string;

  @ViewChild("myInput") private _inputElement: ElementRef;

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, private nodeConfigService: NodeConfigService, private route: ActivatedRoute, private dataTrans: DataTransService) {

  }

  ngOnInit(): void {
    this.userEmail = this.route.snapshot.paramMap.get('userName');
  }

  ngAfterViewInit(): void {
    this._inputElement.nativeElement.focus();
  }

  mfaCodeForm = this.fb.group({
    'mfaCode': ['', Validators.required]
  });

  onClickSubmit(): void {

    let obj = {
      userName: this.userEmail,
      mfsaCode: this.mfaCodeForm.controls.mfaCode.value
    }

    this.nodeConfigService.verifyMfsaCode(obj).subscribe((res: any) => {
      this.allData = res;
      this.dataTrans.setCountry(res.countryList);
      this.dataTrans.setCurrency(res.currencyList);
      this.dataTrans.setMethodType(res.methodTypeList);
      this.dataTrans.setParam(res.paramList);
      this.dataTrans.setPartners(res.partnerList);
      localStorage.setItem('isLogged', "yes");
      if (this.allData.status.statusCode == 200) {
        this.router.navigate(['/home', { data: this.allData }]);
        this.showErrorMsg = false;
      } else {
        this.showErrorMsg = true;
      }
    });
  }
}
