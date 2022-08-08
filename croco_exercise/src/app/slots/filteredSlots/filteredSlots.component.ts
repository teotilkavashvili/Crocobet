import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filteredSlots',
  templateUrl: './filteredSlots.component.html',
  styleUrls: ['./filteredSlots.component.scss'],
})
export class FilteredSlotsComponent implements OnInit {
  @Input() filteredSlots: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.filteredSlots);
  }

  ngOnInit() {}
}
