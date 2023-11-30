import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  userEmail : any;
  showAlert : boolean = false;

  constructor(private fb: FormBuilder, private router: Router,private nodeConfigService : NodeConfigService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.userName = localStorage.getItem('user');
    this.userEmail =this.route.snapshot.paramMap.get('userEmail');
  }

  newPasswordForm = this.fb.group({
    'newPassWord': ['',
      [Validators.required]],
    'confirmPassword': ['',
      [Validators.required]],
  }, { validators: this.validateAreEqual });

  onClickSubmit(): void {
    this.router.navigate(['']);

    let userData = {
      userName : this.userEmail,
      password : this.newPasswordForm.controls.confirmPassword.value
    }

    this.nodeConfigService.updatePass(userData).subscribe(res=>{})
  }

  public validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.newPassWord === c.value.confirmPassword ? null : { notSame: true };
  }
}