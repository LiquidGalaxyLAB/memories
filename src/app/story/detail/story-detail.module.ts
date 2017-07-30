import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdInputModule,
  MdNativeDateModule,
  MdDatepickerModule,
  MdSnackBarModule,
  MdTooltipModule,
} from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import {
  SafeStylePipe,
  SafeUrlPipe,
  CastModule,
} from '../../shared';
import { StoryDetailComponent } from './story-detail.component';
import { StoryDetailBannerComponent } from './banner/story-detail-banner.component';
import { StoryDetailCommentComponent } from './comment/story-detail-comment.component';
import { StoryDetailCommentNewComponent } from './comment/story-detail-comment-new.component';
import { StoryDetailDateComponent } from './date/story-detail-date.component';
import { StoryDetailDescriptionComponent } from './description/story-detail-description.component';
import { StoryDetailMapComponent } from './map/story-detail-map.component';
import { StoryDetailPhotoComponent } from './photo/story-detail-photo.component';
import { StoryDetailTitleComponent } from './title/story-detail-title.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSnackBarModule,
    MdTooltipModule,
    AgmCoreModule,
    CastModule,
  ],
  exports: [],
  declarations: [
    StoryDetailComponent,
    StoryDetailBannerComponent,
    StoryDetailCommentComponent,
    StoryDetailCommentNewComponent,
    StoryDetailDateComponent,
    StoryDetailDescriptionComponent,
    StoryDetailMapComponent,
    StoryDetailPhotoComponent,
    StoryDetailTitleComponent,
  ],
  providers: [
    SafeStylePipe,
    SafeUrlPipe,
  ],
})
export class StoryDetailModule { }
