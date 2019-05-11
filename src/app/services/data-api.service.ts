import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ReviewInterface } from '../models/review-interface';

@Injectable({
  providedIn: 'root'
})

export class DataApiService {
  constructor(private http: HttpClient) {}
/*
    Create new props in order to retrieve information
    reviews type any -> list.
    review type any -> detail.
  */
  reviews: Observable<any>;
  review: Observable<any>;


  /**
   * Set key for API.
   */
   api_key = 'P4A6WIashXxXP6SDozSET1GWXc7QjbiT';

  /**
   * 1. Method to get all the reviews
   */
  getReviews() {
    const api_key = this.api_key;
    const path_url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?/critics/all.json&api-key=${api_key}`;
    return this.http.get(path_url);
  }
}
