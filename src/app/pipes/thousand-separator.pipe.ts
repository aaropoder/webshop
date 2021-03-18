import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator',
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    // value = value * 1000;
    // return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // return.value.toLocaleString("ee");
    return value
      .toLocaleString('et', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(',', '.');
    // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
