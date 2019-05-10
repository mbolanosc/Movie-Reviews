import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
      * Check if the val matches any val of the array of reviews
      * criteria:
      *   1.display_title
      *   2.byline
      *   3.headline
      *   4.summary_short
      */

  transform(value: any, arg: any): any {
    /**Validates if the data comes empty */
    if (arg === "" || arg.length < 2) { return value;}

    const resultReviews = [];
    for (const review of value){
      if (review.display_title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultReviews.push(review);
      } else if (review.byline.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultReviews.push(review);
      } else if (review.headline.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultReviews.push(review);
      } else if (review.summary_short.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultReviews.push(review);
      }
    }
    return resultReviews;
  }

}


