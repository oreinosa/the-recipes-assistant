import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { RecipesModule } from '../recipes/recipes.module';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, SearchboxComponent],
  imports: [
    SharedModule,
    RecipesModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,

  ],
  exports: [NavigationComponent]
})
export class CoreModule { }
