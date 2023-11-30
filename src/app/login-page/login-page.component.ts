import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NodeConfigService } from '../services/node-config.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  showErrorMsg         : boolean = false;
  showForgotEmailAlert : boolean = false;
  hide                 : boolean = true;
  
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,private nodeConfigService: NodeConfigService) {

  }

  loginForm = this.fb.group({
    'userEmail'    : ['', [Validators.required]],
    'password'     : ['',[Validators.required]],
  });

  onClickSubmit() {
    let userName = this.loginForm.controls.userEmail.value
    let user = {
      userName : this.loginForm.controls.userEmail.value,
      password :  this.loginForm.controls.password.value
    }

    this.nodeConfigService.userLogin(user).subscribe((res : any) => {
      if(res.statusCode == 200){
        this.router.navigate(['/multiFactorAuth',{ userName : userName  }]);
      }else if(res.statusCode == 500){
        this.showErrorMsg = true;
      }
    });
  }

  onClickForgotPass() {
    let userName = this.loginForm.controls.userEmail.value;
    // this.showForgotEmailAlert = true;
    if(this.loginForm.controls.userEmail.value == ''){
      this.showForgotEmailAlert = true;
    }else{
      this.showForgotEmailAlert = false;
      this.router.navigate(['/forgotPass',{ userName : userName  }]);
    }
    
  }

  PasswordStrengthValidator(control: AbstractControl): ValidationErrors | null {

    let value: string = control.value || '';
    if (!value) {
      return null
    }

    let upperCaseCharacters = /[A-Z]+/g
    if (upperCaseCharacters.test(value) === false) {
      return { passwordStrength: `text has to contain Upper case characters` };
    }

    let lowerCaseCharacters = /[a-z]+/g
    if (lowerCaseCharacters.test(value) === false) {
      return { passwordStrength: `text has to contain lower case characters` };
    }


    let numberCharacters = /[0-9]+/g
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: `text has to contain number characters` };
    }

    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: `text has to contain special character` };
    }
    return null;
  }


}
