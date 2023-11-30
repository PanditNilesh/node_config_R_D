import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NodeConfigService } from '../services/node-config.service';
import { DataTransService } from '../services/data-trans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-node-configuration',
  templateUrl: './node-configuration.component.html',
  styleUrls: ['./node-configuration.component.css']
})
export class NodeConfigurationComponent {
  showHideMaxMin : boolean  = false;
  currencyList   : any[]    = [];
  countryList    : any[]    = [];
  methodTypeList : any[]    = [];
  jarParamList   : any[]    = [];
  demoData       : string[] = [];
  str_arr        : any      = [];
  selected_param : any      = [];
  param_length   : number   = 0;
  current_length : number   = 0;

  constructor(private fb: FormBuilder, private nodeConfigService: NodeConfigService, private dataTrans: DataTransService, private router: Router) {

  }

  partnerCodeParametersForm = this.fb.group({
    'partner_code'           : ['', [Validators.required]],
    'currency'               : ['', [Validators.required]],
    'operator'               : ['', [Validators.required]],
    'country_code'           : ['', [Validators.required]],
    'min_per_Trx_Limit'      : ['', [Validators.required]],
    'max_per_Trx_Limit'      : ['', [Validators.required]],
    'file_path'              : ['', [Validators.required]],
    'file_name'              : ['', [Validators.required]],
    'jar_parameters'         : ['', [Validators.required]],
    'jar_parameters_dropDown': ['', [Validators.required]],
    'method'                 : ['', [Validators.required]],
    'name'                   : ['', [Validators.required]],
    'prefixVarchar'          : ['', [Validators.required]],
    'curbiCodeVarchar'       : ['', [Validators.required]],
    'reference'              : ['']
  });

  ngOnInit(): void {
    this.countryList    = this.dataTrans.getCountry();
    this.currencyList   = this.dataTrans.getCurrency();
    this.methodTypeList = this.dataTrans.getMethodType();
    this.jarParamList   = this.dataTrans.getParam();
    let isRecordForUpdation = this.dataTrans.getUpdate();

    if (isRecordForUpdation) {
      let record              = this.dataTrans.getUpdateData();
      let selectedParams: any = record.jarParams.split(',');
      this.selected_param     = record.jarParams.split(',');
      
      for (let i = 0; i < selectedParams.length; i++) {
        for (let j = 0; j < this.jarParamList.length; j++) {
          if (this.jarParamList[j].paramName === selectedParams[i]) {
            this.param_length += 1;
          }
        }
      }

      this.partnerCodeParametersForm.patchValue({
        partner_code            : record.partnerCode,
        currency                : record.currencyCode,
        operator                : record.operator,
        country_code            : record.countryCode,
        min_per_Trx_Limit       : record.minPerTxLimit,
        max_per_Trx_Limit       : record.maxPerTxLimit,
        file_path               : record.filePath,
        file_name               : record.fileName,
        jar_parameters          : record.jarParams,
        jar_parameters_dropDown : this.selected_param,
        method                  : record.method,
        name                    : record.name,
        prefixVarchar           : record.prefix,
        curbiCodeVarchar        : record.curbiCode,
        reference               : record.reference,
      })

      if (record.method == 'transfer') {
        this.showHideMaxMin = true;
      } else {
        this.showHideMaxMin = false;
      }
    }

  }

  createNodeConfig() {
    let reqObj = {
      method        : this.partnerCodeParametersForm.controls.method.value,
      partnerCode   : this.partnerCodeParametersForm.controls.partner_code.value,
      currencyCode  : this.partnerCodeParametersForm.controls.currency.value,
      operator      : this.partnerCodeParametersForm.controls.operator.value,
      countryCode   : this.partnerCodeParametersForm.controls.country_code.value,
      minPerTxLimit : this.partnerCodeParametersForm.controls.min_per_Trx_Limit.value,
      maxPerTxLimit : this.partnerCodeParametersForm.controls.max_per_Trx_Limit.value,
      fileName      : this.partnerCodeParametersForm.controls.file_name.value,
      name          : this.partnerCodeParametersForm.controls.name.value,
      filePath      : this.partnerCodeParametersForm.controls.file_path.value,
      jarParams     : this.partnerCodeParametersForm.controls.jar_parameters.value?.toString(),
      prefix        : this.partnerCodeParametersForm.controls.prefixVarchar.value,
      curbiCode     : this.partnerCodeParametersForm.controls.curbiCodeVarchar.value,
      reference     : this.partnerCodeParametersForm.controls.reference.value,
    }
    this.nodeConfigService.createNodeConfig(reqObj).subscribe((res: any) => {
      if (res.status.statusCode === "200") {
        this.dataTrans.setPartners(res.partnerList);
        this.router.navigate(['/home']);
      }
    });
  }

  editTableValues(event: any): void {
    this.createNodeConfig();
  }

  onMethodChange(event: any) {
    if (event == 'transfer') {
      this.showHideMaxMin = true;
    } else {
      this.showHideMaxMin = false;
    }
  }

  onSelectChange(selectedValue: any) {
    this.current_length = selectedValue.value.length;
  }

  onChange(item: any) {
    if (this.current_length > this.param_length) {
      this.param_length += 1;
      this.selected_param.push(item);
      this.partnerCodeParametersForm.patchValue({
        jar_parameters: this.selected_param
      });
    } else {
      this.param_length -= 1;
      for (let i in this.selected_param) {
        if (this.selected_param[i] === item) {
          this.selected_param.splice(i, 1)
        }
      }
      this.partnerCodeParametersForm.patchValue({
        jar_parameters: this.selected_param
      });
    }
  }

  onTextEdit(s: any) {
    let params: any     = s.trim().split(',');
    this.selected_param = params;
    this.partnerCodeParametersForm.patchValue({
      jar_parameters: params
    });
  }
}
