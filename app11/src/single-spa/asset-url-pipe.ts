import { Pipe, PipeTransform } from '@angular/core';
import { assetUrl } from './asset-url';

@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  transform(value: string): string {
    return assetUrl(value);
  }
}
