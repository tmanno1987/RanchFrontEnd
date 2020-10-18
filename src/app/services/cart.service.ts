import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[];
  total: Subject<number> = new Subject<number>();
  quantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(enter: CartItem) {
    let alreadyInCart: boolean = false;
    let existingItem: CartItem = undefined;

    if (this.items.length > 0) {
      existingItem = this.items.find(temp => temp.id === enter.id);
      alreadyInCart = (existingItem != undefined);
    }

    if (alreadyInCart) {
      existingItem.quantity++;
    } else {
      this.items.push(enter);
    }

    this.computeTotals();
  }

  computeTotals() {
    let value: number = 0;
    let quant: number = 0;

    for (let cart of this.items) {
      value += cart.quantity * cart.unitPrice;
      quant += cart.quantity;
    }

    this.total.next(value);
    this.quantity.next(quant);
  }

  decrementQuantity(cart: CartItem) {
    cart.quantity--;

    if (cart.quantity === 0) {
      this.remove(cart);
    } else {
      this.computeTotals();
    }
  }

  remove(cart: CartItem) {
    const index = this.items.findIndex(tci => tci.id == cart.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.computeTotals();
    }
  }
}