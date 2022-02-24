import { Injectable } from '@angular/core';
import { productList } from './Data';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class CountService {
 
    count: number=0 ;

  constructor() {
    this.filteredItems = productList;
  }
  filteredItems : Product[];

  changed():number {
    this.count = 0;
    this.filteredItems.forEach(item => {
      if (item['checked']) {
        this.count = this.count + 1;
      }
    })
    return this.count;
  }
}
