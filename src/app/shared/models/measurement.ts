import { Unit } from './unit';

export class Measurement {
  constructor(
    public id?: number,
    public quantity?: number,
    public unit?: Unit
  ) { }
}
