import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable()
export class SharedService {
  user?: SocialUser;

  constructor(private authService: SocialAuthService, private router: Router) {
    console.log('shared service called');
    this.authService.authState.subscribe((user) => {
      console.log('user details ', user);
      this.user = user;
      localStorage.setItem('authToken', user.authToken);
      localStorage.setItem('username', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('photoUrl', user.photoUrl);
      this.router.navigate(['/']);
    });
  }
}
