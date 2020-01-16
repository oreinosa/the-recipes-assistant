import { Section } from './section';
import { Instruction } from './instruction';
import { UserRating } from './user-rating';
import { Post } from './post';
import { Rendition } from './rendition';
import { Tag } from './tag';

export class Recipe extends Post {
  constructor(
    public recipes: Recipe[] = [],
    public id?: string,
    public keywords?: string,
    public credits?: string,
    public name?: string,
    public renditions?: Rendition[],
    public description?: string,
    public slug?: string,
    public thumbnail_url?: string,
    public tags?: Tag[],
    public cook_time_minutes?: number,
    public country?: string,
    public num_servings?: number,
    public servings_noun_plural?: string,
    public servings_noun_singular?: string,
    public prep_time_minutes?: number,
    public total_time_minutes?: number,
    public sections?: Section[],
    public instructions?: Instruction[],
    public user_ratings?: UserRating
  ) {
    super(recipes, id, keywords, credits, name, renditions, description, slug, thumbnail_url, tags);
  }
}