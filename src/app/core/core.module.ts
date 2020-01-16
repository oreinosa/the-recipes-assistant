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
<<<<<<< HEAD
import { ActionsComponent } from './actions/actions.component';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent, ToolbarComponent, ActionsComponent],
=======


@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent, ToolbarComponent],
>>>>>>> c5aaea40f931c378f1e0273504b87df8983f7e66
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
