import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { FormsModule } from '@angular/forms';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { SearchOpportunityComponent } from './search-opportunity/search-opportunity.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';
import { SocialAuthServiceConfig } from 'angularx-social-login'
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login'
import { CommonModule } from '@angular/common';
import { AuthGuard } from './Shared/Guard';
import { SharedService } from './Services/shared.service';

//const config = new SocialAuthServiceConfig([
  
@NgModule({
  declarations: [
    AppComponent,
    OpportunityListComponent,
    CreateOpportunityComponent,
    UpdateOpportunityComponent,
    SearchOpportunityComponent,
    ViewOpportunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    CommonModule
  ],
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
    AuthGuard,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
