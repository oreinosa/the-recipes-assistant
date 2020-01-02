import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compilation } from 'src/app/shared/models/compilation';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-compilation',
  templateUrl: './compilation.component.html',
  styleUrls: ['./compilation.component.scss']
})
export class CompilationComponent implements OnInit {
  $post: Observable<Compilation>;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.$post = this.route.paramMap
      .pipe(
        map(params => params.get('slug')),
        switchMap((slug) => !!this.recipesService.getCurrentPost() ?
          this.recipesService.getCurrentPostObservable() :
          this.recipesService.getPostDetails(slug)),
        tap(details => console.log(details))
      );
  }

}
