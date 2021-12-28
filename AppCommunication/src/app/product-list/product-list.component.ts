import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  // selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css']

  selector: 'hello',
  template: `
    <h1 [ngClass]="{'window-grey' : nameObj.odd }">
         {{ nameObj.name }} --> {{ nameObj.odd }}!
    </h1>`,
  styles: [`h1 { font-family: Lato; } .window-grey { color : gray }`]
})
export class ProductListComponent implements OnInit {

  @Input() parentData:string ="";
  @Input() nameObj: any;

  @Output() childEvent = new EventEmitter<string>();

  onChange(value:string){
    this.childEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

 
}
