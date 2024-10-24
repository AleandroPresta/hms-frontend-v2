import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RoomFilterService } from '../room-filter.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-room-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './room-filter.component.html',
  styleUrl: './room-filter.component.css'
})
export class RoomFilterComponent implements OnInit {

  @Output() filterChange = new EventEmitter<any>();

  filterForm: FormGroup;

  roomTypes: string[] = [];
  maxCapacity: number = 0;
  roomLocations: string[] = [];

  constructor(
    private fb: FormBuilder,
    private roomFilterService: RoomFilterService
  ) {
    this.filterForm = this.fb.group({
      type: [''],
      capacity: [''],
      location: [''],
      priceRange: [''],
      features: this.fb.group({
        wifi: [false],
        balcony: [false],
        minibar: [false]
      }),
      minRating: [''],
      size: ['']
    });
  }

  ngOnInit(): void {
    this.roomTypes = this.roomFilterService.getRoomTypes();
    this.maxCapacity = this.roomFilterService.getMaxCapacity();
    this.roomLocations = this.roomFilterService.getRoomLocations();
  }

  applyFilters() {
    this.filterChange.emit(this.filterForm.value);
  }

  resetFilters() {
    this.filterForm.reset();
    this.filterChange.emit(this.filterForm.value);
  }

  getRange(arg0: number): any {
    // Return an array of numbers from 1 to arg0 in increasing order
    const a: number[] = Array.from({ length: arg0 }, (_, i) => i + 1);
    return a;
  }

}
