import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Post } from 'src/app/shared/models/post';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  headerPost: Post = null;
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipesService.getFeed().pipe(
      tap(posts => {
        this.headerPost = (posts && posts.length) ? posts[0] : null;
        console.log(this.headerPost);
      }),
      map(posts => posts.slice(1))
    )
      .subscribe((posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
