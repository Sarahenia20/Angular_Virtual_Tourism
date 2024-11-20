import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any = {
    name: 'Sahar Gaiche',
    email: 'sahargaiche@esprit.com',
    profileImage: 'assets/images/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r.jpeg'
  };

  constructor(private router: Router, public dialog: MatDialog) {}

  getProfileImage(): string {
    return this.user && this.user.profileImage
      ? this.user.profileImage
      : 'assets/images/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r.jpeg'; // Retourne une image par défaut si aucune image n'est définie
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
      }
    });
  }
}
