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
<<<<<<< HEAD
  MatMenuModule
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

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
<<<<<<< HEAD
    MatMenuModule
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
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
<<<<<<< HEAD
    MatMenuModule
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
  ]
})
export class SharedModule { }
