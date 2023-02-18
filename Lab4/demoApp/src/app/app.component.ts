import { Component } from '@angular/core';
import { User } from './UserInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  message: string;
  numbers: number[];
  isOk: boolean;
  users:User[];
  items:string[];
  text:string;

  constructor(){
    this.message = "Message";
    this.title = "Demo";
    this.isOk = true;
    this.numbers = [1,2,3,4,5]
    this.users = [
      {
        name: "Era",
        age: 20
      },
      {
        name: "Duka",
        age: 21
      },
      {
        name: "Aibek",
        age: 23
      }
    ];
    this.items = [];
    this.text = '';
  }

  change(){
    this.isOk = !this.isOk;
  }
  saveText(){
    if(this.text !== ''){
      this.items.push(this.text);
      this.text = '';
    }
  }
  delBnt(i: number){
    this.items.splice(i, 1);
  }

}
