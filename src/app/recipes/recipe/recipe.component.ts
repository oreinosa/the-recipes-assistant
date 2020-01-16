import { tap, switchMap, map } from 'rxjs/operators';
import { RecipesService } from './../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe';
import { PostContainer } from 'src/app/shared/models/post-container';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, PostContainer {
  $post: Observable<Recipe>;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.$post = this.getPost();
  }

  getPost(): Observable<Recipe> {
    return this.route.paramMap
      .pipe(
        map(params => params.get('slug')),
        switchMap((slug) => this.recipesService.getCurrentRecipe(slug)),
        tap(details => console.log(details))
      );
  }

  selectPost(post: Recipe){
    this.recipesService.setCurrentRecipe(post);
  }

}
