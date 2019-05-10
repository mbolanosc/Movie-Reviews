import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {  path: '', component: HomeComponent },
  {  path: 'reviews', component: ReviewsComponent},
  {  path: 'review/:id', component: ReviewComponent},
  {  path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
