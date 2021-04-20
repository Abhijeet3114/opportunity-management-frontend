import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  user ?: SocialUser;
  constructor(private authSerive: SocialAuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['opportunities']);
      return;
    }
    this.authSerive.authState.subscribe(user => {
      this.user = user;
      console.log(user);
      localStorage.setItem("authToken", user.authToken);
      localStorage.setItem("username", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photoUrl", user.photoUrl);
      this.router.navigate(['opportunities']);
    });
    }

  signInWithGoogle(): any {
    this.authSerive.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
