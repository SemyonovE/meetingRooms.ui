import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../../meetings.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  meetingService: MeetingsService;

  constructor(private service: MeetingsService) {
    this.meetingService = service;
  }

  ngOnInit() {
  }

}
