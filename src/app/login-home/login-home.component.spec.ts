import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginHomeComponent } from './login-home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SocialAuthServiceConfig } from 'angularx-social-login'
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login'
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('LoginHomeComponent', () => {
  let component: LoginHomeComponent;
  let fixture: ComponentFixture<LoginHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, SocialLoginModule],
      declarations: [LoginHomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
      ,
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '604014241218-os1ne12jcdmupgqospkes04ikjurq0fj.apps.googleusercontent.com'
                )
              }
            ]
          } as SocialAuthServiceConfig,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of LoginHomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
