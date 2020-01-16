import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  scrollTop = 0;
  hideNav = false;

  screenSize = 4;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit() {
      this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
    .pipe(
      map(result => {
        switch (true) {
          case this.breakpointObserver.isMatched('(max-width: 599.99px)'):
            return 1;
          case this.breakpointObserver.isMatched('(min-width: 600px) and (max-width: 959.99px)'):
            return 2;
          case this.breakpointObserver.isMatched('(min-width: 960px) and (max-width: 1279.99px)'):
            return 3;
          default:
            return 4;
        }
      }))
      .subscribe(result => {
        console.log(result);
        this.screenSize = result;
      });
      
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


  onScroll(event) {
    if (this.screenSize < 3) {
      this.hideNav = this.scrollTop < event.target.scrollTop;
      this.scrollTop = event.target.scrollTop;
      console.log(this.hideNav);
    }
  }

}
