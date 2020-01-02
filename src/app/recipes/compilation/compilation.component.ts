import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compilation } from 'src/app/shared/models/compilation';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { PostContainer } from 'src/app/shared/models/post-container';

@Component({
  selector: 'app-compilation',
  templateUrl: './compilation.component.html',
  styleUrls: ['./compilation.component.scss']
})
export class CompilationComponent implements OnInit, PostContainer {
  $post: Observable<Compilation>;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.$post = this.getPost();
  }

  getPost(): Observable<Compilation> {
    return this.route.paramMap
      .pipe(
        map(params => params.get('slug')),
        switchMap((slug) => this.recipesService.getCurrentCompilation(slug)),
        tap(details => console.log(details))
      );
  }

  selectPost(post: Compilation): void {
    this.recipesService.setCurrentCompilation(post);
  }

}
