import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app11-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.scss' ],
})
export class HomeComponent {
  url = assetUrl('code-loader.gif');
}
