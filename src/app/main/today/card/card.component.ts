import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() meeting;
  @Input() freeDuration;

  meetingSeconds: number = 0;

  time: Date = new Date();

  constructor() {
  }

  ngOnInit() {
    this.meetingSeconds = Date.parse(this.meeting['EndDate'])
    setInterval(() => this.time = new Date(), 1000);
  }

}
