import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view-heroes/view-heroes.module').then(m => m.ViewHeroesModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create-heroes/create-heroes.module').then(m => m.CreateHeroesModule)
  },
  {
    path: 'create/:id',
    loadChildren: () => import('./create-heroes/create-heroes.module').then(m => m.CreateHeroesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
