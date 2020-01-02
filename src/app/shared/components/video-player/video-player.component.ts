import { Component, OnInit, Input } from '@angular/core';
import { Rendition } from '../../models/rendition';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() renditions: Rendition[];
  constructor() { }

  ngOnInit() {
  }

}
