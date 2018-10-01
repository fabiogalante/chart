import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { ResultadoComponent } from './resultado/resultado.component';


import { CandidatoService } from './services/teamservice.service';
import {ChartModule} from 'angular-highcharts';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CandidatoComponent,
    VotacaoComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ChartModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'votacao', component: VotacaoComponent },
      { path: 'resultado', component: ResultadoComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [CandidatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
