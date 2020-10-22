import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Cattle } from 'src/app/common/cattle';
import { CattleCategory } from 'src/app/common/cattle-category';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cattle-deals',
  templateUrl: './cattle-deals.component.html',
  styleUrls: ['./cattle-deals.component.css']
})
export class CattleDealsComponent implements OnInit {

  cattle: Cattle[] = [];
  cattleCats: CattleCategory[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalElements: number = 0;

  constructor(private ps: ProductService,
              private cs: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCattle();
    });
  }

  addToCart(item: Cattle) {
    this.cs.addToCart(new CartItem(item));
  }

  listCattle() {
    this.ps.getCattleList().subscribe(data => {
      this.cattle = data;
    });
  }

  updatePageSize(size: number) {
    this.pageSize = size;
    this.pageNumber = 1;
    this.listCattle();
  }

  handleListCattle() {
    this.ps.getCattleListPaginate(this.pageNumber-1, this.pageSize).subscribe(this.processResults());
  }

  private processResults() {
    return data => {
      this.cattle = data._embedded.cattle;
      this.pageNumber = data.page.number+1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    };
  }

  getCattleCategory() {
    this.ps.getCategories().subscribe(
      data => this.cattleCats = data
    );
  }
}