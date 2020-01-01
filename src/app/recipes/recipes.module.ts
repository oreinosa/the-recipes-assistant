import { NgModule } from '@angular/core';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CompilationComponent } from './compilation/compilation.component';
import { SearchComponent } from './search/search.component';
import { MobileSearchDialogComponent } from './search/mobile-search-dialog/mobile-search-dialog.component';
import { HeaderPostPreviewComponent } from './header-post-preview/header-post-preview.component';
import { SearchboxComponent } from './search/searchbox/searchbox.component';


@NgModule({
  declarations: [
    SearchResultsComponent,
    PostPreviewComponent,
    RecipeComponent,
    CompilationComponent,
    SearchComponent,
    SearchboxComponent,
    MobileSearchDialogComponent,
    HeaderPostPreviewComponent
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
  exports: [
    PostPreviewComponent,
    HeaderPostPreviewComponent,
    SearchboxComponent,
    SearchComponent,
    MobileSearchDialogComponent],
  entryComponents: [MobileSearchDialogComponent]
})
export class RecipesModule { }
