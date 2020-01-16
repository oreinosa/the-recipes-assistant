import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
<<<<<<< HEAD
  @Input() screenSize = 4;
  @Input() hideNav = false;
  actions = [
    { path: 'login', label: 'Login', icon: 'people' },
    { path: 'register', label: 'Register', icon:"person_add"}
  ]
=======
  @Input() displaySize = 'xs';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
  links = [
    { path: '', label: 'Home', icon: 'home' }
  ]
  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    
=======
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
  }

}
