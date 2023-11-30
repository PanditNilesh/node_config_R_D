import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.css']
})
export class EnterOtpComponent implements OnInit{

  userEmail    : any;
  showErrorMsg : boolean = false;

  constructor(private router : Router,private fb : FormBuilder,private nodeConfigService : NodeConfigService,private route : ActivatedRoute){}

  otpConfirmForm = this.fb.group({
    'enterOTP' : ['',Validators.required]
  });

  ngOnInit(): void {
    // this.userEmail = localStorage.getItem('user');
    this.userEmail =this.route.snapshot.paramMap.get('userName');
  }

  onClickSubmit(): void {
  
    let userData = {
      userName : this.userEmail,
      otp      : this.otpConfirmForm.controls.enterOTP.value
    }

    this.nodeConfigService.checkOTP(userData).subscribe((res : any)=>{
      if(res.statusCode == 200 ){
        this.router.navigate(['/newPassword',{userEmail : this.userEmail }]);
      } else if(res.statusCode == 500 ){
        this.showErrorMsg = true;
      }
    })
  }

}
