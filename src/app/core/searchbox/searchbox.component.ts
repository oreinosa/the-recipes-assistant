import { RecipesService } from './../../recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime, finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AutoComplete } from '../../shared/models/auto-complete';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  results: Observable<AutoComplete[]>;

  isLoading = false;
  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.results = this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((prefix) => {
          if (typeof prefix === 'string') { // if user is typing and is not empty
            if (prefix !== '') {
              this.isLoading = true; // show it's loading
              // return auto complete http request 
              return this.recipesService.getAutoComplete(prefix)
                .pipe(finalize(() => this.isLoading = false));
              // finish loading once http request finalizes
            }
          } else {
            // if user has selected search result
            this.recipesService.searchSubject.next(prefix.display);
            this.router.navigate(['search'], { // navigate to show search query in URL
              queryParams: {
                'q': prefix.display
              }
            });
          }
          return [];
        }),
        tap(results => {
          console.log(results);
        })
      );
  }

  displayFn(result?: any): string | undefined {
    return result ? result.display : undefined;
  }

}
