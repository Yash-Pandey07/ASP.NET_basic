import { Component, OnInit } from '@angular/core';
// import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  title="Product List";

  companylogo = "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg";

  buttonStatus=false;
  
  //var num=0;
  buttonClick(){
    
    //num=num+1;
  console.log("THe button is clicked ");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
