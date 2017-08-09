import {Injectable} from '@angular/core'
import {ISport} from './sport.model'

@Injectable()
export class SportsService {
  getSports() {
    return SPORTS
  }
}

const SPORTS:ISport[] = [{name: "Running"}, {name: "Jumping"}, {name: "Monkey business"}]
