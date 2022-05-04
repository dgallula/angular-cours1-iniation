import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  // exercice 1 

//   title: string = 'david'
//  calc(n:number):number {
//    return n*3

//    }
  
   getUsername(Uname: string):number
   {
     return Uname.length
   }
 
  
}