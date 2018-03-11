import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../../meetings.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  meetingService: MeetingsService;

  // durations: number[];

  constructor(private service: MeetingsService) {
    
  }

  getDuration(index) {
    if(index == 0) return 0;
    return (+Date.parse(this.meetingService.meetings[index]['StartDate']) - +Date.parse(this.meetingService.meetings[index - 1]['EndDate'])) / 60000
  }

  ngOnInit() {
    this.meetingService = this.service;
    // let meetings = this.meetingService.meetings;
    // for (let i = 0; i < meetings.length - 1; i++) {
    //   this.durations.push((+Date.parse(meetings[i + 1]['StartDate']) - +Date.parse(meetings[i]['EndDate'])) / 60);
    // }
    // this.durations.push(0);
  }

}
