import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MultiFactorAuthComponent } from './multi-factor-auth/multi-factor-auth.component';
import { NodeConfigurationComponent } from './node-configuration/node-configuration.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PassResetLinkComponent } from './pass-reset-link/pass-reset-link.component';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { authGuard } from './auth/auth.guard';
import { ConfigOvaComponent } from './config-ova/config-ova.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  { path: 'forgotPass', component: ForgotPasswordComponent },
  { path: 'multiFactorAuth', component: MultiFactorAuthComponent },
  { path: 'nodeConfig', component: NodeConfigurationComponent, canActivate: [authGuard] },
  { path: 'newPassword', component: NewPasswordComponent },
  { path: 'passRestLink', component: PassResetLinkComponent },
  { path: 'enterOTP', component: EnterOtpComponent },
  { path: 'config-ova', component: ConfigOvaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
