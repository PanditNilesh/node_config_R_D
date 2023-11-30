import { Component,OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-dialogue-box-table',
  templateUrl: './dialogue-box-table.component.html',
  styleUrls: ['./dialogue-box-table.component.css']
})
export class DialogueBoxTableComponent implements OnInit{
  
  showHideMaxMin : boolean = false;
  
  constructor(public dialogRef: MatDialogRef<DialogueBoxTableComponent>,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private router: Router,private nodeConfigService : NodeConfigService) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  newPassLink(){
    this.router.navigate(['enterOTP',{ userName : this.data  }]);   
  }
 
}
