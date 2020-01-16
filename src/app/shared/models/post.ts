import { Rendition } from './rendition';
import { Tag } from './tag';
<<<<<<< HEAD
import { Recipe } from './recipe';

export abstract class Post {
  constructor(
    public recipes: Recipe[] = [],
=======

export abstract class Post {
  constructor(
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
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
<<<<<<< HEAD
=======

  abstract get link(): string;
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
}