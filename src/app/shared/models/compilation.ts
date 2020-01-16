import { Rendition } from './rendition';
import { Recipe } from './recipe';
import { Tag } from './tag';
import { Post } from './post';

export class Compilation extends Post {
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
  ) {
    super(recipes, id, keywords, credits, name, renditions, description, slug, thumbnail_url, tags);
  }

}
