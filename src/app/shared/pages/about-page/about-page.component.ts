import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  templateUrl: './about-page.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
