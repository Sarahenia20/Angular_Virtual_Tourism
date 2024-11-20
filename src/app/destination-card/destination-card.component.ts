import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-destination-card',
  standalone: true,
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css'],
  imports: [CommonModule, NavbarComponent]
})
export class DestinationCardComponent {
  destinations = [
    { name: 'Tropical Island', date: '2024-10-15', image: 'assets/tropical.jpg' },
    { name: 'Mountain Escape', date: '2024-12-01', image: 'assets/mountain.jpg' },
    { name: 'City Adventure', date: '2024-11-20', image: 'assets/city.jpg' },
     { name: 'Roma', date: '2024-11-20', image: 'assets/images/view-ancient-roman-empire-colosseum.jpg' },
    { name: 'Tropical Island', date: '2024-11-20', image: 'assets/tropical.jpg' },
    { name: 'City Adventure', date: '2024-11-20', image: 'assets/city.jpg' },
    { name: 'Mountain Escape', date: '2024-11-20', image: 'assets/mountain.jpg' }



  ];

  constructor() {
    console.log(this.destinations);  // Verify destinations are properly defined
  }
}