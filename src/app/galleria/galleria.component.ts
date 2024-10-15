import { Component, Input, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Room } from '../rooms/Room';

interface GalleriaItem {
  itemImageSrc: string;
  thumbnailImageSrc: string;
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [
    GalleriaModule
  ],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.css'
})
export class GalleriaComponent implements OnInit {

  @Input() images: string[] = [];

  galleryImages: GalleriaItem[] = [];

  ngOnInit(): void {
    this.galleryImages = this.images.map(
      (imageUrl) => ({
        itemImageSrc: imageUrl,
        thumbnailImageSrc: imageUrl,
      })
    );
  }

  onActiveIndexChange(index: number) {
    console.log('Active image changed:', this.galleryImages[index]);
    // You can perform any action here when the active index changes
  }

}
