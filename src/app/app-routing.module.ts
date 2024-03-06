import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MT010MEMComponent } from './components/mt010-mem/mt010-mem.component';
import { MA010FILComponent } from './components/ma010-fil/ma010-fil.component';
import { M010FILBComponent } from './components/m010-filb/m010-filb.component';
import { MT010CORComponent } from './components/mt010-cor/mt010-cor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MT010MEM', component: MT010MEMComponent },
  { path: 'MA010FIL', component: MA010FILComponent },
  { path: 'M010FILB', component: M010FILBComponent },
  { path: 'MT010COR', component: MT010CORComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
