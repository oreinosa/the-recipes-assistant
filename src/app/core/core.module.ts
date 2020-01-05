import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { RecipesModule } from '../recipes/recipes.module';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent, ToolbarComponent],
  imports: [
    SharedModule,
    RecipesModule,
    LayoutModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [NavigationComponent]
})
export class CoreModule { }
