import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgStyle, NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  @Input() size: string = '3rem';
  @Input() height: string = '100px';
  @Input() showText: boolean = true;
  @Input() text: string = 'Loading...';

}
