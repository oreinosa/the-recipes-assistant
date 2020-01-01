import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    
  ]
})
export class SharedModule { }
