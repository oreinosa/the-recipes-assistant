import { RecipesService } from './../../recipes.service';
import { AutoComplete } from './../../../shared/models/auto-complete';
import { Observable, Subject, of } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, finalize, takeUntil } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mobile-search-dialog',
  templateUrl: './mobile-search-dialog.component.html',
  styleUrls: ['./mobile-search-dialog.component.scss']
})
export class MobileSearchDialogComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  searchControl: FormControl = new FormControl();
  $results: Observable<AutoComplete[]>;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<MobileSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.$results = this.searchControl.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(350),
        switchMap((search: string) => {
          if (search !== "") {
            this.isLoading = true;
            return this.recipesService.getAutoComplete(search.trim().toLowerCase()).pipe(finalize(() => this.isLoading = false))
          }
          return of([]);
        })
      );
  }

  onPressEnter(search: string) {
    if (search !== "") {
      this.onSelectSearch(search.trim().toLowerCase());
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectSearch(query: string) {
    this.recipesService.setSearchQuery(query);
    this.dialogRef.close();
  }

}
