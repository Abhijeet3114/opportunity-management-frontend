import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opportunity-management-frontend';
  constructor(private authService: SocialAuthService, private router: Router) { }
  signOut(): any {
    this.authService.signOut();
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("photoUrl");
    localStorage.removeItem("authToken");
    this.router.navigate(['login']);
  }
}
