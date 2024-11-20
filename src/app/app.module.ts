import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Import other components and modules here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ExploreComponentComponent } from './explore-component/explore-component.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Map3dComponent } from './map3d/map3d.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { CommonModule } from '@angular/common';
import { TravelAgencyComponent } from './Travel-agency/travel-agency.component';
import { AbonementComponent } from './abonement/abonement.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditProfileComponent,
    ExploreComponentComponent,
    HelpComponentComponent,
    TravelAgencyComponent,
    AbonementComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    // Import standalone components here instead
    HomePageComponent,
    DestinationCardComponent,
    Map3dComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,  // <-- Import CommonModule here

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

