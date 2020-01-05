import { Component } from './component';

export class Section {
  constructor(
    public name?: string,
    // public posisiton?: number,
    public components?: Component[],
  ) { }
}