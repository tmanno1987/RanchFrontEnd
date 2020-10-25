import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Cattle } from 'src/app/common/cattle';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cattle-view',
  templateUrl: './cattle-view.component.html',
  styleUrls: ['./cattle-view.component.css']
})
export class CattleViewComponent implements OnInit {

  cattle: Cattle = new Cattle();

  constructor(private ps: ProductService,
              private route: ActivatedRoute,
              private cs: CartService) { }

  ngOnInit(): void { }

  addToCart() {
    console.log(`Adding to cart: ${this.cattle.category.breed}, ${this.cattle.price}`);
    this.cs.addToCart(new CartItem(this.cattle));
  }

  getCattle() {
    const catId: number = +this.route.snapshot.paramMap.get('id');
    this.ps.getCattle(catId).subscribe(
      data => {
        this.cattle = data
    });
  }
}