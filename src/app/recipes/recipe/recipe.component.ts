import { tap, switchMap, map } from 'rxjs/operators';
import { RecipesService } from './../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  $post: Observable<Post>;
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
