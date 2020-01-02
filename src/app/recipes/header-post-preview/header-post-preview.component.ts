import { Post } from 'src/app/shared/models/post';
import { Component, OnInit, Input } from '@angular/core';
import { Compilation } from '../../shared/models/compilation';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-header-post-preview',
  templateUrl: './header-post-preview.component.html',
  styleUrls: ['./header-post-preview.component.scss']
})
export class HeaderPostPreviewComponent implements OnInit {
  @Input() post: Post;
  link: string;
  constructor(
    public recipesService: RecipesService
  ) { }

  ngOnInit() {
    let link = '';
    let type = '/recipe';
    // console.log(this.post instanceof Compilation);
    if (this.post instanceof Compilation) {
      type = `/compilation`;
    }
    this.link = `${type}/${this.post.slug}`;
  }

  selectPost() {
    console.log('selected ', this.post.name);
    this.recipesService.setCurrentPost(this.post);
  }

}
