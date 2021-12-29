import { Component, OnInit,Input,Output } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isAvalible=true;

  onChange(value:string){
    this.childEvent.emit(value);
  }
  addCal(var a,var b){
    return this.a+this.b;
  }
  ngOnInit() {
    this.addCal=this.service.addCal(a,b);
  }

}
