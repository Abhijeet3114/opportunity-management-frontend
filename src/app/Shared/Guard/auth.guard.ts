import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {
  loggedIn = false;

  constructor(private router: Router, private sharedService: SharedService) { }

  canActivate() {
    if (localStorage.getItem('authToken')) {
      this.loggedIn = true;
    } else if (this.sharedService.user) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    if (!this.loggedIn) this.router.navigate(['/login']);

    return this.loggedIn;
  }
}
