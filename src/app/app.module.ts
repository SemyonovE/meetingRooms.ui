import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NowComponent} from './main/now/now.component';
import {TodayComponent} from './main/today/today.component';
import {NewMeetingComponent} from './main/new-meeting/new-meeting.component';
import {TimeComponent} from './main/now/time/time.component';
import {CurrentStatusComponent} from './main/now/current-status/current-status.component';
import {CardComponent} from './main/today/card/card.component';
import {TimelineComponent} from './main/today/timeline/timeline.component';
import {HttpClientModule} from '@angular/common/http';
import {MeetingsService} from './meetings.service';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {EventCardComponent} from './main/now/event-card/event-card.component';
import {GetTimeComponent} from './main/get-time/get-time.component';

const appRoutes: Routes = [
  {path: 'room', component: MainComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NowComponent,
    TodayComponent,
    NewMeetingComponent,
    TimeComponent,
    CurrentStatusComponent,
    CardComponent,
    TimelineComponent,
    MainComponent,
    EventCardComponent,
    GetTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MeetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
