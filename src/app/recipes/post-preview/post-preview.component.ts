import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { Compilation } from 'src/app/shared/models/compilation';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() post: Post;
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  selectPost() {
    console.log('selected ', this.post.name);
    this.recipesService.setCurrentPost(this.post);
  }

}
