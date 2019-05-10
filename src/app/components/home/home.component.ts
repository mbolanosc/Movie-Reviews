import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ReviewInterface } from '../../models/review-interface';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  /**  Filters */
  filterReview = '';
  

  public reviews: Object[];
  public reviewDetail: Object[]; //TODO NOT USED.

  

  ngOnInit() {
    this.getListReviews();
  }

  getListReviews() {
    this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => this.reviews = results);
    this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => console.log('##results ', results));
  }

  //TODO not working
  getDetailReview(event, movie_title) {
    console.log('$% ', movie_title);
    //this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => this.reviews = results);

    this.dataApi.getReviewDetailByMovieName(movie_title).subscribe(({ results }: ReviewInterface) => this.reviewDetail = results);
    console.log('$% from getDetailReview', this.reviewDetail);
  }
}
