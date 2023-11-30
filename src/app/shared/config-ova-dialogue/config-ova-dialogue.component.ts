import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataTransService } from 'src/app/services/data-trans.service';
import { NodeConfigService } from 'src/app/services/node-config.service';

@Component({
  selector: 'app-config-ova-dialogue',
  templateUrl: './config-ova-dialogue.component.html',
  styleUrls: ['./config-ova-dialogue.component.css']
})
export class ConfigOvaDialogueComponent implements OnInit {

  ovaData : any;
  disableInput : boolean = false;
  constructor(public dialogRef: MatDialogRef<ConfigOvaDialogueComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder,private nodeConfigService:NodeConfigService,private dataTransService:DataTransService,private router: Router){
    
  }

  configOvaForm = this.fb.group({
    'rp_code' : ['',[Validators.required]],
    'ova' : ['',[Validators.required]],
    'sp_code' : ['',[Validators.required]],
  });

  ngOnInit(){
    var keys = Object.keys(this.data)
  
    if(keys[0] == 'editNode'){
  
      this.configOvaForm.patchValue({
        rp_code : this.data.editNode.receivingPartner,
        ova     : this.data.editNode.ova,
        sp_code : this.data.editNode.sendingPartner
      });
     
      this.disableInput = true;
      this.addOvaData()
    }
  }

  addOvaData(){
    let obj = {
      "sendingPartner"   : this.configOvaForm.get('sp_code')?.value,
      "receivingPartner" : this.configOvaForm.get('rp_code')?.value,
      "ova"              : this.configOvaForm.get('ova')?.value
    }
    
    this.nodeConfigService.addOva(obj).subscribe((res:any)=>{
      this.dataTransService.setOvaData(res);
    });

  }

  onClickAddOva(){
    this.addOvaData();
  }
}
