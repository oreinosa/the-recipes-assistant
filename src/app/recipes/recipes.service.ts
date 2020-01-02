import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AutoComplete } from '../shared/models/auto-complete';
import { Post } from '../shared/models/post';
import { Recipe } from '../shared/models/recipe';
import { Compilation } from './../shared/models/compilation';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private api = environment.api;
  private searchSubject = new BehaviorSubject<string>(null);
  private currentRecipeSubject = new BehaviorSubject<Recipe>(null);
  private currentCompilationSubject = new BehaviorSubject<Compilation>(null);

  constructor(
    private http: HttpClient
  ) { }

  // getFeed(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.api}/getFeed`)
  //     .pipe(
  //       map((results: any[]) => results.map(result => {
  //         if (result.recipes) {
  //           return {
  //             id: result.id,
  //             recipes: result.recipes.map((recipe: Recipe) => {
  //               return {
  //                 id: recipe.id,
  //                 keywords: recipe.keywords,
  //                 credits: recipe.credits,
  //                 name: recipe.name,
  //                 renditions: recipe.renditions.map(rendition => {
  //                   return {
  //                     url: rendition.url,
  //                     height: rendition.height,
  //                     width: rendition.width,
  //                     content_type: rendition.content_type

  //                   };
  //                 }),
  //                 tags: recipe.tags.map(tag => {
  //                   return {
  //                     display_name: tag.display_name,
  //                     type: tag.type
  //                   };
  //                 }),
  //                 description: recipe.description,
  //                 slug: recipe.slug,
  //                 thumbnail_url: recipe.thumbnail_url,
  //                 cook_time_minutes: recipe.cook_time_minutes,
  //                 country: recipe.country,
  //                 num_servings: recipe.num_servings,
  //                 servings_noun_plural: recipe.servings_noun_plural,
  //                 servings_noun_singular: recipe.servings_noun_singular,
  //                 prep_time_minutes: recipe.prep_time_minutes,
  //                 total_time_minutes: recipe.total_time_minutes,
  //                 sections: recipe.sections.map((section: Section) => {
  //                   return {
  //                     name: section.name,
  //                     components: section.components.map((component: Component) => {
  //                       return {
  //                         raw_text: component.raw_text
  //                       }
  //                     })
  //                   }
  //                 }),
  //                 instructions: recipe.instructions.map((instruction: Instruction) => {
  //                   return { display_text: instruction.display_text };
  //                 }),
  //                 user_ratings: recipe.user_ratings
  //               }
  //             }),
  //             slug: result.slug,
  //             thumbnail_url: result.thumbnail_url,
  //             keywords: result.keywords,
  //             description: result.description,
  //             renditions: result.renditions.map(rendition => {
  //               return {
  //                 url: rendition.url,
  //                 height: rendition.height,
  //                 width: rendition.width,
  //                     content_type: rendition.content_type

  //               };
  //             }),
  //             tags: result.tags.map(tag => {
  //               return {
  //                 display_name: tag.display_name,
  //                 type: tag.type
  //               };
  //             }),
  //             credits: result.credits,
  //             name: result.name,
  //           };
  //         }
  //         return {
  //           id: result.id,
  //           keywords: result.keywords,
  //           credits: result.credits,
  //           name: result.name,
  //           renditions: result.renditions.map(rendition => {
  //             return {
  //               url: rendition.url,
  //               height: rendition.height,
  //               width: rendition.width,
  //                     content_type: rendition.content_type

  //             };
  //           }),
  //           tags: result.tags.map(tag => {
  //             return {
  //               display_name: tag.display_name,
  //               type: tag.type
  //             };
  //           }),
  //           description: result.description,
  //           slug: result.slug,
  //           thumbnail_url: result.thumbnail_url,
  //           cook_time_minutes: result.cook_time_minutes,
  //           country: result.country,
  //           num_servings: result.num_servings,
  //           servings_noun_plural: result.servings_noun_plural,
  //           servings_noun_singular: result.servings_noun_singular,
  //           prep_time_minutes: result.prep_time_minutes,
  //           total_time_minutes: result.total_time_minutes,
  //           sections: result.sections.map((section: Section) => {
  //             return {
  //               name: section.name,
  //               components: section.components.map((component: Component) => {
  //                 return {
  //                   raw_text: component.raw_text
  //                 }
  //               })
  //             }
  //           }),
  //           instructions: result.instructions.map((instruction: Instruction) => {
  //             return { display_text: instruction.display_text };
  //           }),
  //           user_ratings: result.user_ratings
  //         };
  //       }))
  //     );
  // }

  setSearchQuery(query: string) {
    this.searchSubject.next(query);
  }

  getSearchObservable(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  setCurrentPost(post: Post) {
    console.log('selected ', post);
    switch (true) {
      case post instanceof Recipe:
        this.setCurrentRecipe(post);
        break;
      case post instanceof Compilation:
        this.setCurrentCompilation(post);
        break;
    }
  }

  setCurrentCompilation(compilation: Compilation) {
    this.currentCompilationSubject.next(compilation);
  }

  private getCurrentCompilationValue(): Compilation {
    return this.currentCompilationSubject.getValue();
  }

  getCurrentCompilation(slug?: string): Observable<Compilation> {
    return this.getCurrentCompilationValue() !== null ? this.currentCompilationSubject.asObservable() : this.getPostDetails(slug);
  }

  setCurrentRecipe(compilation: Recipe) {
    this.currentRecipeSubject.next(compilation);
  }

  private getCurrentRecipeValue(): Recipe {
    return this.currentRecipeSubject.getValue();
  }

  getCurrentRecipe(slug?: string): Observable<Recipe> {
    return this.getCurrentRecipeValue() !== null ? this.currentRecipeSubject.asObservable() : this.getPostDetails(slug);
  }

  getFeed(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/getFeed`)
      .pipe(
        map(results => results.map(result => {
          if ((result as Compilation).recipes) {
            return Object.assign(new Compilation, result);
          }
          return Object.assign(new Recipe, result);
        }))
      );
  }

  getSearchResults(query?: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/getSearchResults`, {
      params: {
        q: query
      }
    });
  }

  getAutoComplete(prefix: string): Observable<AutoComplete[]> {
    return this.http.get<AutoComplete[]>(`${this.api}/getAutoComplete`, {
      params: {
        prefix
      }
    });
  }

  getPostDetails(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.api}/getPostDetails`, {
      params: {
        slug
      }
    });
  }

  // getSearchResults(query: string): Observable<(Recipe | Compilation)[]> {
  //   return this.http.get<(Recipe | Compilation)[]>(`${this.api}/getSearchResults`, {
  //     params: {
  //       q: query
  //     }
  //   }).pipe(
  //     map((results: any[]) => results.map(result => {
  //       if (result.recipes) {
  //         return {
  //           id: result.id,
  //           recipes: result.recipes.map((recipe: Recipe) => {
  //             return {
  //               id: recipe.id,
  //               keywords: recipe.keywords,
  //               credits: recipe.credits,
  //               name: recipe.name,
  //               renditions: recipe.renditions.map(rendition => {
  //                 return {
  //                   url: rendition.url,
  //                   height: rendition.height,
  //                   width: rendition.width,
  //                   content_type: rendition.content_type
  //                 };
  //               }),
  //               tags: recipe.tags.map(tag => {
  //                 return {
  //                   display_name: tag.display_name,
  //                   type: tag.type
  //                 };
  //               }),
  //               description: recipe.description,
  //               slug: recipe.slug,
  //               thumbnail_url: recipe.thumbnail_url,
  //               cook_time_minutes: recipe.cook_time_minutes,
  //               country: recipe.country,
  //               num_servings: recipe.num_servings,
  //               servings_noun_plural: recipe.servings_noun_plural,
  //               servings_noun_singular: recipe.servings_noun_singular,
  //               prep_time_minutes: recipe.prep_time_minutes,
  //               total_time_minutes: recipe.total_time_minutes,
  //               sections: recipe.sections.map((section: Section) => {
  //                 return {
  //                   name: section.name,
  //                   components: section.components.map((component: Component) => {
  //                     return {
  //                       raw_text: component.raw_text
  //                     }
  //                   })
  //                 }
  //               }),
  //               instructions: recipe.instructions.map((instruction: Instruction) => {
  //                 return { display_text: instruction.display_text };
  //               }),
  //               user_ratings: recipe.user_ratings
  //             }
  //           }),
  //           slug: result.slug,
  //           thumbnail_url: result.thumbnail_url,
  //           keywords: result.keywords,
  //           description: result.description,
  //           renditions: result.renditions.map(rendition => {
  //             return {
  //               url: rendition.url,
  //               height: rendition.height,
  //               width: rendition.width,
  //               content_type: rendition.content_type
  //             };
  //           }),
  //           tags: result.tags.map(tag => {
  //             return {
  //               display_name: tag.display_name,
  //               type: tag.type
  //             };
  //           }),
  //           credits: result.credits,
  //           name: result.name,
  //         };
  //       }
  //       return {
  //         id: result.id,
  //         keywords: result.keywords,
  //         credits: result.credits,
  //         name: result.name,
  //         renditions: result.renditions.map(rendition => {
  //           return {
  //             url: rendition.url,
  //             height: rendition.height,
  //             width: rendition.width,
  //                   content_type: rendition.content_type
  //           };
  //         }),
  //         tags: result.tags.map(tag => {
  //           return {
  //             display_name: tag.display_name,
  //             type: tag.type
  //           };
  //         }),
  //         description: result.description,
  //         slug: result.slug,
  //         thumbnail_url: result.thumbnail_url,
  //         cook_time_minutes: result.cook_time_minutes,
  //         country: result.country,
  //         num_servings: result.num_servings,
  //         servings_noun_plural: result.servings_noun_plural,
  //         servings_noun_singular: result.servings_noun_singular,
  //         prep_time_minutes: result.prep_time_minutes,
  //         total_time_minutes: result.total_time_minutes,
  //         sections: result.sections.map((section: Section) => {
  //           return {
  //             name: section.name,
  //             components: section.components.map((component: Component) => {
  //               return {
  //                 raw_text: component.raw_text
  //               }
  //             })
  //           }
  //         }),
  //         instructions: result.instructions.map((instruction: Instruction) => {
  //           return { display_text: instruction.display_text };
  //         }),
  //         user_ratings: result.user_ratings
  //       };
  //     }))
  //   );
  // }

}
