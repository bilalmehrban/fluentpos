import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-skeleton',
  templateUrl: './catalog-skeleton.component.html',
  styleUrls: ['./catalog-skeleton.component.scss']
})
export class CatalogSkeletonComponent implements OnInit {
  products = new Array(12);
  constructor() { }

  ngOnInit(): void {
  }

}
