import { Pipe, PipeTransform } from '@angular/core';
import { Point } from '../../../model/point.model';

@Pipe({
  name: 'pointsSearch'
})
export class PointsSearchPipe implements PipeTransform {

  public transform(items: Point[], query: string): Point[] | null {
    const result: Point[] = [];
    if (query === null) {
      return items;
    }
    items.forEach((item: Point) => {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
          item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        result.push(item);
      }
    });
    return result;
  }

}
