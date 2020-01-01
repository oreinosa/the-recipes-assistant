import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<any> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
    .pipe(
      map(result => {
        switch (true) {
          case this.breakpointObserver.isMatched('(max-width: 599.99px)'):
            return 'xs';
          case this.breakpointObserver.isMatched('(min-width: 600px) and (max-width: 959.99px)'):
            return 'sm';
          case this.breakpointObserver.isMatched('(min-width: 960px) and (max-width: 1279.99px)'):
            return 'md';
          default:
            return 'desktop';
        }
      }),
      tap(result => console.log(result)),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
