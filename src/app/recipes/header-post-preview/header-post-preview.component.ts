<<<<<<< HEAD
import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { PreviewContainer } from 'src/app/shared/models/preview-container';
=======
import { Post } from 'src/app/shared/models/post';
import { Component, OnInit, Input } from '@angular/core';
import { Compilation } from '../../shared/models/compilation';
import { RecipesService } from '../recipes.service';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

@Component({
  selector: 'app-header-post-preview',
  templateUrl: './header-post-preview.component.html',
  styleUrls: ['./header-post-preview.component.scss']
})
<<<<<<< HEAD
export class HeaderPostPreviewComponent extends PreviewContainer  {
  constructor(
    public recipesService: RecipesService
  ) {
    super(recipesService);
  }
=======
export class HeaderPostPreviewComponent implements OnInit {
  @Input() post: Post;
  link: string;
  constructor(
    public recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  selectPost() {
    console.log('selected ', this.post.name);
    this.recipesService.setCurrentPost(this.post);
  }

>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
}
