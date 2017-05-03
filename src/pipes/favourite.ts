import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Favourite pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'favourite',
})
export class FavouritePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(obj: any, args: Array<string>) {
        if(obj) {
            return obj[args[0]][args[1]];
        }
    }
}
