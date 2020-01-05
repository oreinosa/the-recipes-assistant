import { Post } from './post';
import { Observable } from 'rxjs';

export interface PostContainer {
  getPost() : Observable<Post>;
  selectPost(post: Post): void;
}
