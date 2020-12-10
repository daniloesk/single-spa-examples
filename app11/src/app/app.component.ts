import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app11-root',
  template: `
    <div class="root">
      <h1>{{title}}</h1>
      <div>Angular {{ ngVersion.full }}</div>
      <div>
        [<a routerLink="app11">Home</a>]
        [<a routerLink="app11/hello">Hello</a>]
        [<a routerLink="app11/lazy">Lazy</a>]
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [ `
    .root {
      border: 1px solid red;
      padding: 1em;
    }
    router-outlet {
      margin-top: 0.5em;
    }
  ` ],
})
export class AppComponent {
  title = 'app11';
  ngVersion = VERSION;
}
