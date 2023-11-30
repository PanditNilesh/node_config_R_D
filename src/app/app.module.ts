import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DialogueBoxTableComponent } from './dialogue-box-table/dialogue-box-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MultiFactorAuthComponent } from './multi-factor-auth/multi-factor-auth.component';
import {MatIconModule} from '@angular/material/icon';
import { NodeConfigurationComponent } from './node-configuration/node-configuration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PassResetLinkComponent } from './pass-reset-link/pass-reset-link.component';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { MatSortModule } from '@angular/material/sort';
import { DataTransService } from './services/data-trans.service';
import { FormsModule } from '@angular/forms';
import { ConfigOvaComponent } from './config-ova/config-ova.component';
import { ConfigOvaDialogueComponent } from './shared/config-ova-dialogue/config-ova-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    DialogueBoxTableComponent,
    MultiFactorAuthComponent,
    NodeConfigurationComponent,
    NavBarComponent,
    NewPasswordComponent,
    PassResetLinkComponent,
    EnterOtpComponent,
    ConfigOvaComponent,
    ConfigOvaDialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [DataTransService,{provide:MatDialogRef , useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
