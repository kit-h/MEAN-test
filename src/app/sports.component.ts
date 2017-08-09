import {Component, OnInit} from '@angular/core'
import {SportsService} from './sports.service'
import {ISport} from './sport.model'


@Component({
  selector: 'sports',
  template: `
  <ul>
  <li *ngFor="let sport of sports">{{sport.name}}</li>
  </ul>
  `,
  providers: [SportsService]
})

export class SportsComponent implements OnInit {
  constructor(private sportsService:SportsService) {}

  sports:ISport[]

  ngOnInit() {
    this.sports = this.sportsService.getSports()
  }

}
