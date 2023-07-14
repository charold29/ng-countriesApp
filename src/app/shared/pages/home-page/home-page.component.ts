import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
