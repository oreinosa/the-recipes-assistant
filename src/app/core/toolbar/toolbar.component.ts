import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() screenSize = 4;
  @Input() hideNav = false;
  actions = [
    { path: 'login', label: 'Login', icon: 'people' },
    { path: 'register', label: 'Register', icon:"person_add"}
  ]
  links = [
    { path: '', label: 'Home', icon: 'home' }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
