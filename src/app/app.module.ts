import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MT010MEMComponent } from './components/mt010-mem/mt010-mem.component';
import { HomeComponent } from './components/home/home.component';
import { MA010FILComponent } from './components/ma010-fil/ma010-fil.component';
import { M010FILBComponent } from './components/m010-filb/m010-filb.component';
import { MT010CORComponent } from './components/mt010-cor/mt010-cor.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent, 
    MT010MEMComponent,
    MA010FILComponent,
    M010FILBComponent,
    MT010CORComponent
    ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
