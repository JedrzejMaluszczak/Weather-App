import { Component, Input, OnInit } from '@angular/core';

import { DataTracker } from '../data-tracker';

@Component({
  selector: 'app-humidity-panel',
  templateUrl: './humidity-panel.component.html',
  styleUrls: ['./humidity-panel.component.scss']
})
export class HumidityPanelComponent implements OnInit {

  @Input() dataTracker: DataTracker;

  constructor() {
  }

  ngOnInit() {
  }

}
