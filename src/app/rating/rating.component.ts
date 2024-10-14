import { NgFor } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;

  stars: { stop: number }[] = [];
  ariaLabel: string = '';

  ngOnChanges() {
    this.calculateStars();
    this.ariaLabel = `Rating: ${this.rating} out of ${this.maxRating} stars`;
  }

  private calculateStars() {
    this.stars = [];
    for (let i = 0; i < this.maxRating; i++) {
      if (this.rating >= i + 1) {
        this.stars.push({ stop: 100 });
      } else if (this.rating > i) {
        const fraction = this.rating - i;
        this.stars.push({ stop: fraction * 100 });
      } else {
        this.stars.push({ stop: 0 });
      }
    }
  }
}
