import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodCart } from 'src/app/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() public shopData: any;
  @Input() public cart: number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  //This method is used for increament the food Quentity
  add1(food: FoodCart): void {
    //console.log(food.qty1);
    if (food.qty1 !== 10) {
      food.qty1 = food.qty1 + 1;
      this.cart = this.cart + 1;
      console.log(this.cart);
      this.notify.emit(this.cart);
    }
  }

  //This method is used for decrement the food Quentity
  sub1(food: FoodCart): void {
    //console.log(food.qty1);
    if (food.qty1 !== 0) {
      food.qty1 = food.qty1 - 1;
      this.cart = this.cart - 1;
      this.notify.emit(this.cart);
    } else if (food.qty1 === 0) {
      //delete this.shopData;                //it delete whole data
      this.shopData.pop();
      this.notify.emit(this.cart);
    }
  }
}
