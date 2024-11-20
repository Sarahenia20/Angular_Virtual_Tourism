// src/app/edit-profile/edit-profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com'
  };

  save() {
    // Logic to save the updated user profile
    console.log('Profile updated:', this.user);
  }
}
