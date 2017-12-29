import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'o app funciona! mesmo oi';

  open = true;

  options :any =   {
    'fixed': true,
    'top': 0,
    'bottom': 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
