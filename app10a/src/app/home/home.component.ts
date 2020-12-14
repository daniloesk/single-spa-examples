import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app10a-home',
  template: `
    <h2>Home</h2>
    <div>
      [ App10A |
      <a routerLink="/app10b">App10B</a> |
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
