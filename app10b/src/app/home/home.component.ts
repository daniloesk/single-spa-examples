import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app10b-home',
  template: `
    <h2>Home</h2>
    <div>
      [ <a routerLink="/app10a">App10A</a> |
      App10B |
      <a routerLink="/app11">App11</a> |
      <a routerLink="/app11b">App11B</a> ]
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
