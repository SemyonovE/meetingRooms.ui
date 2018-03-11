import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class MeetingsService {
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe(params => {
        const requestParams = new HttpParams().set('id', params['id']); // Get url param(room id)

        this.http.get('http://localhost:51520/room', {params: requestParams}).subscribe(data => { // Getting room info
          this._roomName = data['Name'];
          this._roomEmail = data['Email'];
          this.updateMeetings();
        });
      });
    });
  }

  private _roomName = 'Название комнаты';

  get roomName(): string {
    return this._roomName;
  }

  private _roomEmail: string = null;

  get roomEmail(): string {
    return this._roomEmail;
  }

  private _meetings = [];

  get meetings(): any[] {
    return this._meetings;
  }

  private static getEndEventDateByDuration(meetingDate: Date, formattedDuration: string) {
    meetingDate.setHours(
      meetingDate.getHours() + Number(formattedDuration.substring(0, 1)),
      meetingDate.getMinutes() + Number(formattedDuration.substring(3, 4))
    );
    return meetingDate;
  }

  public checkTimeSpaceForAvailible(startDate: Date, formattedDuration: string) {
    for (const meeting of this.meetings) {
      const meetingStartDate = new Date(meeting['StartDate']);
      const meetingEndDate = new Date(meeting['EndDate']);

      if (meetingStartDate > startDate && meetingStartDate < MeetingsService.getEndEventDateByDuration(startDate, formattedDuration)) {
        return false;
      }

      if (meetingStartDate <= startDate && meetingEndDate > startDate) {
        return false;
      }
    }
    return true;
  }

  public isAvailableNow() {
    return this.getCurrentEvent() == null;
  }

  public getCurrentEvent() {
    for (const meeting of this.meetings) {
      const meetingStartDate = new Date(meeting['StartDate']);
      const meetingEndDate = new Date(meeting['EndDate']);
      const currentDate = new Date();

      if (meetingStartDate <= currentDate && meetingEndDate >= currentDate) {
        return meeting;
      }
    }
    return null;
  }

  public getNextEvent() {
    for (const meeting of this.meetings) {
      const meetingDate = new Date(meeting['StartDate']);
      const currentDate = new Date();

      if (meetingDate > currentDate) {
        return meeting;
      }
    }
    return null;
  }

  private updateMeetings(callback = null) {
    const requestParams = new HttpParams().set('roomEmail', this.roomEmail);
    this.http.get<any[]>('http://localhost:51520/meetings', {params: requestParams}).subscribe(data => { // Getting room info
      this._meetings = data;
      console.log(this._meetings);

      if (callback == null) {
        setTimeout(() => this.updateMeetings(), 1000 * 30);
      } else {
        callback();
      }
    }, err => {
      console.error(err);
      setTimeout(() => this.updateMeetings(callback), 1000 * 30);
    });
  }
}
