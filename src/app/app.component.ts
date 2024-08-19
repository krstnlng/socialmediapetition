import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marks';
  email = 'marks@fahrzeugpflege.com';

  constructor(private router: Router) {}

  public redirectToHome() {
    this.router.navigate(['/']);
  }
}
