import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  currentDate():string{
    let todayDate=new Date();
    return todayDate.toString();
  }
}
