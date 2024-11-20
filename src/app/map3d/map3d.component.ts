import { Component, OnInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map3d',
  templateUrl: './map3d.component.html',
  styleUrls: ['./map3d.component.css'],
  standalone: true,
  imports: [NavbarComponent, CommonModule],
})
export class Map3dComponent implements OnInit {
  private raycaster = new THREE.Raycaster(); // Raycaster for detecting clicks
  private mouse = new THREE.Vector2(); // Mouse coordinates
  private globe: THREE.Mesh | undefined; // Reference to the globe mesh
  private camera: THREE.PerspectiveCamera | undefined;
  private renderer: THREE.WebGLRenderer | undefined;

  ngOnInit(): void {
    this.init3DScene();
  }

  init3DScene(): void {
    // Create the scene
    const scene = new THREE.Scene();

    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(49, window.innerWidth / window.innerHeight, 0.3,3000 );
    this.camera.position.z = 3.9;

    // Set up the renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('map3d-container')?.appendChild(this.renderer.domElement);

    // Load the Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/textures/earthmap1k.jpg');

    // Create the globe geometry and material
    const globeGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const globeMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    this.globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(this.globe);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (this.globe) {
        this.globe.rotation.y += 0.001;
      }

      this.renderer?.render(scene, this.camera!);
    };
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.renderer?.setSize(width, height);
      this.camera!.aspect = width / height;
      this.camera!.updateProjectionMatrix();
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.camera && this.globe && this.renderer) {
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster based on the mouse position and the camera
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Check for intersections with the globe
      const intersects = this.raycaster.intersectObject(this.globe);
      if (intersects.length > 0) {
        console.log('Clicked on the globe', intersects[0]);
        this.handleGlobeClick(intersects[0]);
      }
    }
  }

  handleGlobeClick(intersection: THREE.Intersection) {
    const point = intersection.point;
    const latLon = this.convertToLatLon(point);

    console.log(`Clicked at Latitude: ${latLon.lat}, Longitude: ${latLon.lon}`);
    this.displayRegionInfo(latLon.lat, latLon.lon); // Afficher les infos de la région
  }

  convertToLatLon(point: THREE.Vector3) {
    const radius = this.globe!.geometry.boundingSphere!.radius;

    const lat = Math.asin(point.y / radius) * (180 / Math.PI);
    const lon = Math.atan2(point.z, point.x) * (180 / Math.PI);

    return { lat, lon };
  }

  displayRegionInfo(lat: number, lon: number) {
    alert(`Clicked near Latitude: ${lat.toFixed(2)}, Longitude: ${lon.toFixed(2)}`);
  }
}
