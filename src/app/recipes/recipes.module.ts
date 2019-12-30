import { NgModule } from '@angular/core';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CompilationComponent } from './compilation/compilation.component';


@NgModule({
  declarations: [SearchResultsComponent, PostPreviewComponent, RecipeComponent, CompilationComponent],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
  exports: [PostPreviewComponent]
})
export class RecipesModule { }
