export class Rendition {
  constructor(
    public aspect?: string,
    public width?: number,
    public height?: number,
    public container?: string,
    public content_type?: string,
    public url?: string,
    public duration?: number,
  ) { }
}