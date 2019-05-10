import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewInterface } from '../../models/review-interface';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviewDetail: Object[];

  constructor(
    private route: ActivatedRoute,
    private dataApi: DataApiService
) { }

  ngOnInit() {
    this.loadReviewDetail();
  }

  loadReviewDetail() {
    const reviewTitle = this.route.snapshot.paramMap.get('id');
    this.dataApi.getReviewDetailByMovieName(reviewTitle).subscribe(({ results }: ReviewInterface) => this.reviewDetail = results);
    this.dataApi.getReviewDetailByMovieName(reviewTitle).subscribe(({ results }: ReviewInterface) => console.log({ results }, results));

    

  }
}
