import { RecipesService } from './../recipes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map, tap, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  query: string = '';
  results: Post[] = [];
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParamMap.pipe(
      takeUntil(this.ngUnsubscribe),
      map(params => params.get('q')),
      tap(query => {
        this.query = query;
        console.log(query);
      }),
      switchMap(query => this.recipesService.getSearchResults(query))
    )
      .subscribe((results: Post[]) => {
        console.log(results);
        this.results = results;
      });

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
