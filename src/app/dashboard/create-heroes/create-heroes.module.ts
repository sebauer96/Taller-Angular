import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateHeroesRoutingModule } from './create-heroes-routing.module';
import { CreateHeroesComponent } from './create-heroes.component';


@NgModule({
  declarations: [CreateHeroesComponent],
  imports: [
    CommonModule,
    CreateHeroesRoutingModule
  ]
})
export class CreateHeroesModule { }
