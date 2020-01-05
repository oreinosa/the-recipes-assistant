import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatDialogModule,

} from '@angular/material';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VideoPlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
  ]
})
export class SharedModule { }
