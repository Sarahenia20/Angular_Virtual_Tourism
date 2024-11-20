import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToExplore() {
    this.router.navigate(['/explore']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToHelp() {
    this.router.navigate(['/help']);
  }

  navigateToDestinations() {
    this.router.navigate(['/destinations']);
  }
}
