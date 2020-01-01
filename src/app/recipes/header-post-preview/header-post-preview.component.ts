import { Post } from 'src/app/shared/models/post';
import { Component, OnInit, Input } from '@angular/core';
import { Compilation } from '../../shared/models/compilation';

@Component({
  selector: 'app-header-post-preview',
  templateUrl: './header-post-preview.component.html',
  styleUrls: ['./header-post-preview.component.scss']
})
export class HeaderPostPreviewComponent implements OnInit {
  @Input() post: Post;
  link: string;
  constructor() { }

  ngOnInit() {
    let link = '';
    let type = '/recipe';
    // console.log(this.post instanceof Compilation);
    if (this.post instanceof Compilation) {
      type = `/compilation`;
    }
    this.link = `${type}/${this.post.slug}`;
  }

}
