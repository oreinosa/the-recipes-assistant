import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { PreviewContainer } from 'src/app/shared/models/preview-container';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent extends PreviewContainer  {
  constructor(
    public recipesService: RecipesService
  ) {
    super(recipesService);
  }

}
