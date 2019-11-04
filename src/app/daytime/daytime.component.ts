import { Component, Input } from '@angular/core';

import { DataTracker } from '../data-tracker';


@Component({
  selector: 'app-daytime',
  templateUrl: './daytime.component.html',
  styleUrls: ['./daytime.component.scss']
})
export class DaytimeComponent {

  @Input() daytime: 'morning' | 'day' | 'night';

  @Input() dataTracker: DataTracker;


  constructor() {
  }

}
