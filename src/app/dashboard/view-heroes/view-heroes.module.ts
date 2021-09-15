import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHeroesRoutingModule } from './view-heroes-routing.module';
import { ViewHeroesComponent } from './view-heroes.component';
import { HeroeComponent } from '../../shared/heroe/heroe.component';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
import { SuperpoderPipe } from '../../shared/pipes/superpoder.pipe';


@NgModule({
  declarations: [
    ViewHeroesComponent,
    HeroeComponent,
    HighlightDirective,
    SuperpoderPipe],
  imports: [
    CommonModule,
    ViewHeroesRoutingModule
  ]
})
export class ViewHeroesModule { }
