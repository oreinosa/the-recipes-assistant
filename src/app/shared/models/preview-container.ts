import { OnInit, Input } from '@angular/core';
import { Post } from './post';
import { RecipesService } from 'src/app/recipes/recipes.service';

export class PreviewContainer implements OnInit {
  @Input() post: Post;
  type = 'recipe';
  constructor(
    public recipesService: RecipesService
  ) {
  }
  ngOnInit() {
    if (this.post.recipes.length) {
      this.type = 'compilation';
    }
  }

  selectPost(post: Post) {
    if(this.type === 'recipe'){
      this.recipesService.setCurrentRecipe(post);
    }else if(this.type === 'compilation'){
      this.recipesService.setCurrentCompilation(post);
    }else{
      console.log('not found?');
    }
  }
}
