import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MT010MEMComponent } from './components/mt010-mem/mt010-mem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MT010MEM', component: MT010MEMComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
