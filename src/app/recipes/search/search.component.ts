import { RecipesService } from './../../recipes/recipes.service';
import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, finalize, tap } from 'rxjs/operators';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
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
<<<<<<< HEAD
  @Input() screenSize: number = 4;
=======
  @Input() displaySize: string = 'xs';
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66

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
