import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'sarayut jansod';
  object = {
    id: 1,
    name: "kanokwan saehor"
  };

  arr = [
    "Array 1",
    "Array 2"
  ];

  isTrue = true;

  myname = "sarayut jansoda";
}
