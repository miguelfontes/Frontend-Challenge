import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items)
      return [];

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it =>
      it.firstName.toLocaleLowerCase().includes(searchText) || it.lastName.toLocaleLowerCase().includes(searchText)
    );
  }
}
