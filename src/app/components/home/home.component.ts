import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ReviewInterface } from '../../models/review-interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**Router link for detail */

  constructor(
    private dataApi: DataApiService
    ) { }


  /**  Filters */
  filterReview = '';

  public reviews: Object[];

  ngOnInit() {
    this.getListReviews();
  }

  getListReviews() {
    this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => this.reviews = results);
  }

}
