import { RecipesService } from './../../recipes/recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AutoComplete } from '../../shared/models/auto-complete';
import { MatDialog } from '@angular/material';
import { MobileSearchDialogComponent } from './mobile-search-dialog/mobile-search-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() displaySize: string = 'xs';

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.recipesService.getSearchObservable()
      .subscribe((search: string) => {
        if (search) {
          this.router.navigate(['search'], { // navigate to show search query in URL
            queryParams: {
              'q': search
            }
          });
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MobileSearchDialogComponent, {
      width: '350px',
    });
  }

  displayFn(result?: AutoComplete): string | undefined {
    return result ? result.display : undefined;
  }

}
