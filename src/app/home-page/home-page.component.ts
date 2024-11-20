import { Component } from '@angular/core';
import { Map3dComponent } from '../map3d/map3d.component';
import { DestinationCardComponent } from '../destination-card/destination-card.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,  // This component is standalone
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [CommonModule, Map3dComponent, DestinationCardComponent, NavbarComponent, FooterComponent]  // Ensure CommonModule is included
})
export class HomePageComponent {
  destinations = [
    { name: 'Tropical Island', date: '2024-10-15', image: 'assets/tropical.jpg' },
    { name: 'Mountain Escape', date: '2024-12-01', image: 'assets/mountain.jpg' },
    { name: 'City Adventure', date: '2024-11-20', image: 'assets/city.jpg' }
  ];

  constructor() {
    console.log(this.destinations);  // Verify destinations are properly defined
  }
}
