import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  userEmail    : any;
  showErrorMsg : boolean = false;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private nodeConfigService: NodeConfigService,private route : ActivatedRoute) { }

  forgotPassForm = this.fb.group({
    'email': ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
    // this.userName = localStorage.getItem('user');
    this.userEmail =this.route.snapshot.paramMap.get('userName');
  }

  sendRestLink(enterAnimationDuration: string, exitAnimationDuration: string) {
    let userEmail = {
      userName: this.userEmail,
      email: this.forgotPassForm.controls.email.value
    };
    
    this.nodeConfigService.sendOTPtoMail(userEmail).subscribe((res: any) => {
      if(res.statusCode == 200){
        this.router.navigate(['enterOTP',{ userName : this.userEmail  }]);  
        this.showErrorMsg = false;
      }else{
        this.showErrorMsg = true;
      }
     });
  }

  backToLogin() {
    this.router.navigate([''])
  }
}
