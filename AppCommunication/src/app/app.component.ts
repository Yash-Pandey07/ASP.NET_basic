import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component appCommunication';
  childData:string ="";

  catchChildEvent($event :string){
    this.childData=$event;
  }
  days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  phone=["111111111","22222222","333333333","44444444","5555555555","666666666666","7777777777","8888888888","9999999999"];
  isodd=true;
 
  listname = ['1','2','3','4','5','6','7','8','9','10'];
  numbers = [1,2,3,4,5,6,7,8,9,10];
  public get changeOdd(){
    this.isodd = !this.isodd;
    return true;
  }
  // num_page_items = 10;
  // for i in range(num_page_items):
  //   if i % 2 == 0:                    #This is a sanity check to see if i is odd or even
  //       Home = odds[i].text
  //   else:
  //       Away = odds[i].text

}
