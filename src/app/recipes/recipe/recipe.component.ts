import { tap, switchMap, map } from 'rxjs/operators';
import { RecipesService } from './../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe';
<<<<<<< HEAD
import { PostContainer } from 'src/app/shared/models/post-container';
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
<<<<<<< HEAD
export class RecipeComponent implements OnInit, PostContainer {
=======
export class RecipeComponent implements OnInit {
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
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
