import { Rendition } from './rendition';
import { Tag } from './tag';
import { Recipe } from './recipe';

export abstract class Post {
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
  ) { }
}