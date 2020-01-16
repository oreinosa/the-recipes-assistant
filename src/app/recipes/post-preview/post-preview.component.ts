<<<<<<< HEAD
import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { PreviewContainer } from 'src/app/shared/models/preview-container';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { Compilation } from 'src/app/shared/models/compilation';
import { RecipesService } from '../recipes.service';
import { Recipe } from 'src/app/shared/models/recipe';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
<<<<<<< HEAD
export class PostPreviewComponent extends PreviewContainer  {
  constructor(
    public recipesService: RecipesService
  ) {
    super(recipesService);
=======
export class PostPreviewComponent implements OnInit {
  @Input() post: Post;
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  selectPost(post: Post) {
    this.recipesService.setCurrentPost(post);
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
  }

}
