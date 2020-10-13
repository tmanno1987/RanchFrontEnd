import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cattle } from 'src/app/common/cattle';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cattle-deals',
  templateUrl: './cattle-deals.component.html',
  styleUrls: ['./cattle-deals.component.css']
})
export class CattleDealsComponent implements OnInit {

  cattle: Cattle[];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalElements: number = 0;

  constructor(private ps: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCattle();
    });
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
}
