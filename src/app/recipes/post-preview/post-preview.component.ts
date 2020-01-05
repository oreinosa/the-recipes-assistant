import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { Compilation } from 'src/app/shared/models/compilation';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/app/shared/models/recipe';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() post: Post;
  @Input() type = '';
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    if (!this.type) {
      switch (true) {
        case this.post instanceof Recipe:
          this.type = 'recipe';
          break;
        case this.post instanceof Compilation:
          this.type = 'compilation';
          break;
      }
    }
  }

  selectPost(post: Post) {
    this.recipesService.setCurrentPost(post);
  }

}
