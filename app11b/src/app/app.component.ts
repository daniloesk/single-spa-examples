import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app11b-root',
  template: `
    <div class="root">
      <h1>{{title}}</h1>
      <div>Angular {{ ngVersion.full }}</div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [ `
    .root {
      border: 1px solid blue;
      padding: 1em;
    }
    router-outlet {
      margin-top: 0.5em;
    }
  ` ],
})
export class AppComponent {
  title = 'app11b';
  ngVersion = VERSION;
}
