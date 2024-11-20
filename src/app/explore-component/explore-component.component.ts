import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-component',
  templateUrl: './explore-component.component.html',
  styleUrls: ['./explore-component.component.css']
})
export class ExploreComponentComponent {
  attractions = [
    {
      id: 1,
      name: 'Tour Eiffel',
      description: 'Un symbole emblématique de Paris.',
      videoUrl: 'https://www.gstatic.com/culturalinstitute/searchar/assets/eiffel_tower/desktop_light.mp4', // Lien vers la vidéo
    },
    {
      id: 2,
      name: 'Colisée',
      description: 'Un amphithéâtre romain, un chef-d\'œuvre d\'architecture.',
      imageUrl: 'assets/images/view-ancient-roman-empire-colosseum.jpg',
    },
    {
      id: 3,
      name: 'Statue de la Liberté',
      description: 'Un monument de liberté et d\'espoir à New York.',
      imageUrl: 'assets/images/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}


