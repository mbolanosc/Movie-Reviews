import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewInterface } from '../../models/review-interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviews: Object[];
  public detailInfo: any;

  constructor(
    private route: ActivatedRoute,
    private dataApi: DataApiService
  ) { }

  ngOnInit() {
    this.loadReviewDetail();
  }

  /**
   * Method loadReviewDetail
   * API does not have any end point with an ID for the detail of each review!
   * https://developer.nytimes.com/docs/movie-reviews-api/1/overview
   * Gets Param from Route.
   * Process to do a match from the request data and the param.
   */
  loadReviewDetail() {
    const indexParam = +this.route.snapshot.paramMap.get('id');
    this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => {
      this.reviews = results;
      this.reviews.map((review, index) => {
        if (index === indexParam) {
          this.detailInfo = review;
        }
      });
    });
  }
}


