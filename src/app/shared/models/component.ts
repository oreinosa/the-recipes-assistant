import { Measurement } from './measurement';
import { Ingredient } from './ingredient';

export class Component {
  constructor(
    public extra_comment?: string,
    public position?: number,
    public id?: number,
    public raw_text?: string,
    public measurements?: Measurement[],
    public ingredient?: Ingredient
  ) { }
}