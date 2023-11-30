import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NodeConfigurationUserInterface';

  constructor(private router: Router) {

    // if (localStorage.getItem('user') == null) {
    //   this.router.navigate(['']);
    // } else {
    //   this.router.navigate(['/home'])
    // }
  }
}
