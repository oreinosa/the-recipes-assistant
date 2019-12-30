import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AutoComplete } from '../shared/models/auto-complete';
import { Post } from '../shared/models/post';
import { Recipe } from '../shared/models/recipe';
import { Compilation } from './../shared/models/compilation';
import { map } from 'rxjs/operators';
import { Section } from '../shared/models/section';
import { Component } from '../shared/models/component';
import { Instruction } from '../shared/models/instruction';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private api = 'http://localhost:5000/my-recipes-assistant/us-central1';
  searchSubject = new Subject<string>();
  currentPostSubject = new Subject<Post>();

  constructor(
    private http: HttpClient
  ) { }

  getFeed(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/getFeed`)
      .pipe(
        map((results: any[]) => results.map(result => {
          if (result.recipes) {
            return {
              id: result.id,
              recipes: result.recipes.map((recipe: Recipe) => {
                return {
                  id: recipe.id,
                  keywords: recipe.keywords,
                  credits: recipe.credits,
                  name: recipe.name,
                  renditions: recipe.renditions.map(rendition => {
                    return {
                      url: rendition.url,
                      height: rendition.height,
                      width: rendition.width
                    };
                  }),
                  tags: recipe.tags.map(tag => {
                    return {
                      display_name: tag.display_name,
                      type: tag.type
                    };
                  }),
                  description: recipe.description,
                  slug: recipe.slug,
                  thumbnail_url: recipe.thumbnail_url,
                  cook_time_minutes: recipe.cook_time_minutes,
                  country: recipe.country,
                  num_servings: recipe.num_servings,
                  servings_noun_plural: recipe.servings_noun_plural,
                  servings_noun_singular: recipe.servings_noun_singular,
                  prep_time_minutes: recipe.prep_time_minutes,
                  total_time_minutes: recipe.total_time_minutes,
                  sections: recipe.sections.map((section: Section) => {
                    return {
                      name: section.name,
                      components: section.components.map((component: Component) => {
                        return {
                          raw_text: component.raw_text
                        }
                      })
                    }
                  }),
                  instructions: recipe.instructions.map((instruction: Instruction) => {
                    return { display_text: instruction.display_text };
                  }),
                  user_ratings: recipe.user_ratings
                }
              }),
              slug: result.slug,
              thumbnail_url: result.thumbnail_url,
              keywords: result.keywords,
              description: result.description,
              renditions: result.renditions.map(rendition => {
                return {
                  url: rendition.url,
                  height: rendition.height,
                  width: rendition.width
                };
              }),
              tags: result.tags.map(tag => {
                return {
                  display_name: tag.display_name,
                  type: tag.type
                };
              }),
              credits: result.credits,
              name: result.name,
            };
          }
          return {
            id: result.id,
            keywords: result.keywords,
            credits: result.credits,
            name: result.name,
            renditions: result.renditions.map(rendition => {
              return {
                url: rendition.url,
                height: rendition.height,
                width: rendition.width
              };
            }),
            tags: result.tags.map(tag => {
              return {
                display_name: tag.display_name,
                type: tag.type
              };
            }),
            description: result.description,
            slug: result.slug,
            thumbnail_url: result.thumbnail_url,
            cook_time_minutes: result.cook_time_minutes,
            country: result.country,
            num_servings: result.num_servings,
            servings_noun_plural: result.servings_noun_plural,
            servings_noun_singular: result.servings_noun_singular,
            prep_time_minutes: result.prep_time_minutes,
            total_time_minutes: result.total_time_minutes,
            sections: result.sections.map((section: Section) => {
              return {
                name: section.name,
                components: section.components.map((component: Component) => {
                  return {
                    raw_text: component.raw_text
                  }
                })
              }
            }),
            instructions: result.instructions.map((instruction: Instruction) => {
              return { display_text: instruction.display_text };
            }),
            user_ratings: result.user_ratings
          };
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
  //                   width: rendition.width
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
  //               width: rendition.width
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
  //             width: rendition.width
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
