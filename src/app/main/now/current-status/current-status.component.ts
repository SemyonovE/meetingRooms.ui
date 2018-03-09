import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnInit {
  @Input() isAvailable: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
