import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceServiceService {

  constructor() { }

  sum:number
  getTotal(pr1:number,pr2:number)
  {
    this.sum=pr1+pr2;
    return this.sum;
  }
}
