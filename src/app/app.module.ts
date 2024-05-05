import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MainConfig } from './main/main.config';
import { RouterModule } from '@angular/router';
import { ListModule } from './list/list.module';
import { CustomUppercasePipe } from 'src/app/pipes/custom-uppercase-pipe';

const routes = [{ path: 'list', loadComponent: () => import('./list/list.module').then(m => m.ListModule), title: 'list' }];

@NgModule({
  declarations: [
    AppComponent,
    CustomUppercasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    RouterModule.forRoot(routes),
    ListModule
  ],
  providers: [{
    provide: MainConfig, useValue: {
        valor: 'Valor customizado'
    }
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
