import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { PreviewContainer } from 'src/app/shared/models/preview-container';

@Component({
  selector: 'app-header-post-preview',
  templateUrl: './header-post-preview.component.html',
  styleUrls: ['./header-post-preview.component.scss']
})
export class HeaderPostPreviewComponent extends PreviewContainer  {
  constructor(
    public recipesService: RecipesService
  ) {
    super(recipesService);
  }
}
