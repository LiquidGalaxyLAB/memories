import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdMenuModule,
  MdTooltipModule,
} from '@angular/material';
import { ResponsiveModule } from 'ng2-responsive';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {
  CastModule,
  PwModule,
} from '../shared';
import { StoryNewModule } from './story-new/story-new.module';
import { JourneyListComponent } from './list/journey-list.component';
import { JourneyListOwnerComponent } from './list/journey-list-owner.component';
import { JourneyNewComponent } from './new/journey-new.component';
import { JourneyDetailComponent } from './detail/journey-detail.component';
import { JourneyResolver } from './journey-resolver.service';
import { JourneyRoutingModule } from './journey-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdMenuModule,
    MdTooltipModule,
    ResponsiveModule,
    AngularFireAuthModule,
    CastModule,
    PwModule,
    StoryNewModule,
    JourneyRoutingModule,
  ],
  exports: [],
  declarations: [
    JourneyListComponent,
    JourneyListOwnerComponent,
    JourneyNewComponent,
    JourneyDetailComponent,
  ],
  providers: [
    JourneyResolver,
  ],
})
export class JourneyModule { }
