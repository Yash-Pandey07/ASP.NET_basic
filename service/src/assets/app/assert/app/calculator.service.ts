import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  var a,b;
  constructor() { }
  addCal(int a,int b) {  
    return (a+b);
  }
}
