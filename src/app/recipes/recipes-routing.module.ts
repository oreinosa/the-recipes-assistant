import { SearchResultsComponent } from './search-results/search-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { CompilationComponent } from './compilation/compilation.component';


const routes: Routes = [
  { path: 'search', component: SearchResultsComponent },
  { path: 'recipe/:slug', component: RecipeComponent },
  { path: 'compilation/:slug', component: CompilationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
