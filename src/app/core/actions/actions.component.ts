import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/shared/models/link';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() actions: Link[];
  constructor() { }

  ngOnInit() {
  }

}
