import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  price: number = 0.00;
  quantity: number = 0;

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.seperateCartStatus();
  }

  seperateCartStatus() {
    this.cs.total.subscribe(p => this.price = p);
    this.cs.quantity.subscribe(q => this.quantity = q);
  }
}