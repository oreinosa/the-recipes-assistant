import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() displaySize = 'xs';
  @Input() hideNav = false;
  links = [
    { path: '', label: 'Home', icon: 'home' }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
