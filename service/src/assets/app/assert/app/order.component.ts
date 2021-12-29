import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: DatetimeService) { }

  currentDate :string ="";

  ngOnInit() {
    this.currentDate=this.service.currentDate();
    console.log(this.currentDate);
  }

}
