import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TripComponent } from './trip.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'trips', component: TripComponent },
    ])
  ]
})
export class TripRoutingModule { }
