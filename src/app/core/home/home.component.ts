import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipesService.getFeed()
      .subscribe((posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
