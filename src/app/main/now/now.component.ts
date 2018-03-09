import {Component, OnInit} from '@angular/core';
import {MeetingsService} from '../../meetings.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  meetingsService: MeetingsService;

  constructor(private service: MeetingsService) {
    this.meetingsService = service;
  }

  ngOnInit() {
  }

}
