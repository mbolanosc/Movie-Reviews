import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewInterface } from '../../models/review-interface';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviews: Object[]; // From DataApiService
  public detailInfo: any[];

  public errorMsg: String = 'Ups something happend.';

  constructor(
    private route: ActivatedRoute,
    private dataApi: DataApiService
  ) { }

  ngOnInit() {
    this.loadReviewDetail();


  }

  loadReviewDetail() {
    const indexParam = +this.route.snapshot.paramMap.get('id');
    this.dataApi.getReviews().subscribe(({ results, review_detail }: ReviewInterface) => {
      this.reviews = results;
      console.log('this.reviews', this.reviews[indexParam]);
      this.reviews.map((review, index) => {
       // console.log('review', index, 'param index ', indexParam);
        if (index === indexParam) {
       //   console.log('@#@#@## hay match', review);
          this.detailInfo = review;
          console.log('detailInfo', this.detailInfo);
        } else {
          console.log('NO hay match');
        }
      });

    });
    //this.dataApi.getReviews().subscribe(({ results }: ReviewInterface) => console.log({ results }, this.reviews ));


  }

}


