import { Post } from 'src/app/shared/models/post';
import { Component, OnInit, Input } from '@angular/core';
import { Compilation } from '../../shared/models/compilation';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/app/shared/models/recipe';

@Component({
  selector: 'app-header-post-preview',
  templateUrl: './header-post-preview.component.html',
  styleUrls: ['./header-post-preview.component.scss']
})
export class HeaderPostPreviewComponent implements OnInit {
  @Input() post: Post;
  type = 'recipe';
  constructor(
    public recipesService: RecipesService
  ) { }

  ngOnInit() {
    switch (true) {
      case this.post instanceof Recipe:
        this.type = 'recipe';
        break;
      case this.post instanceof Compilation:
        this.type = 'compilation';
        break;
    }
  }

  selectPost() {
    console.log('selected ', this.post.name);
    this.recipesService.setCurrentPost(this.post);
  }

}
