import { RecipesService } from './../recipes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map, tap, switchMap, finalize } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  query: string = '';
  posts: Post[] = null;
  isLoading = false;
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
<<<<<<< HEAD
        if(!query) this.router.navigate(['/'])
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
        this.isLoading = true;
        this.posts = null;
        this.query = query;
        console.log(query);
      }),
      switchMap(query => this.recipesService.getSearchResults(query).pipe(finalize(() => this.isLoading = false)))
    )
      .subscribe((posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
      });

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
