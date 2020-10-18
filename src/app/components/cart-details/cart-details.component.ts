import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  items: CartItem[];
  total: number = 0;
  quantity: number = 0;

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  remove(cart: CartItem) {
    this.cs.remove(cart);
  }

  incQuantity(cart: CartItem) {
    this.cs.addToCart(cart);
  }

  decQuantity(cart: CartItem) {
    this.cs.decrementQuantity(cart);
  }

  listCartDetails() {
    this.items = this.cs.items;
    this.cs.total.subscribe(t => this.total = t);
    this.cs.quantity.subscribe(q => this.quantity = q);
    this.cs.computeTotals();
  }
}