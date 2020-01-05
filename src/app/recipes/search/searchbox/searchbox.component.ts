import { RecipesService } from './../../recipes.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoComplete } from '../../../shared/models/auto-complete';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  searchControl = new FormControl();
  results: Observable<AutoComplete[]>;
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.results = this.searchControl.valueChanges
      .pipe(
        debounceTime(350),
        filter(search => search !== ""),
        switchMap((search: string) => this.recipesService.getAutoComplete(search))
      );
  }

  displayFn(query?: AutoComplete): string | undefined {
    return query ? query.display : undefined;
  }

  onSelectSearch(query: string) {
    this.recipesService.setSearchQuery(query);
  }

  onPressEnter(search: string) {
    if (search !== "") {
      this.onSelectSearch(search);
    }
  }
} 
