import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-get-time',
  templateUrl: './get-time.component.html',
  styleUrls: ['./get-time.component.css']
})
export class GetTimeComponent implements OnInit {
  @Input() date;
  @Input() dateString = null;

  constructor() {
  }

  ngOnInit() {
    if (this.dateString != null) {
      this.date = new Date(this.dateString);
    }
  }

}
