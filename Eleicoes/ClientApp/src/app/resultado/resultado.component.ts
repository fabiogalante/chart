import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';


import { Chart } from 'angular-highcharts';
import {CandidatoDados} from '../votacao/votacao.component';
import {CandidatoService} from '../services/teamservice.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  public chart: any;
  public totalVotos: number;
  public resultadoLista: CandidatoDados[];




  constructor(public http: Http, private _candidatoService: CandidatoService) {

    Observable.zip(this._candidatoService.obterTotalVotos(), this._candidatoService.obterCandidatos())
      .subscribe(([totalVoteCount, teamListData]) => {
        this.totalVotos = totalVoteCount;
        this.resultadoLista = teamListData;

        for (let i = 0; i < teamListData.length; i++) {
          teamListData[i].voteShare = (((teamListData[i].voteCount) / this.totalVotos) * 100);
        }

        this.createCharts();
      });

  }

  createCharts() {
    this.chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Vote share for each team'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Votes'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Vote: <b>{point.y:.2f} %</b>'
      },

      series: [{
        type: 'column',
        data: [
          { name: this.resultadoLista[0].candidatoNome, y: this.resultadoLista[0].quantidadeVotos, color: 'rgba(253, 185, 19, 0.85)' },
          { name: this.resultadoLista[1].candidatoNome, y: this.resultadoLista[1].quantidadeVotos, color: 'rgba(0, 76, 147, 0.85)' },
          { name: this.resultadoLista[2].candidatoNome, y: this.resultadoLista[2].quantidadeVotos, color: 'rgba(170, 69, 69, 0.85)' },
          { name: this.resultadoLista[3].candidatoNome, y: this.resultadoLista[3].quantidadeVotos, color: 'rgba(112, 69, 143, 0.85)' },
          { name: this.resultadoLista[4].candidatoNome, y: this.resultadoLista[4].quantidadeVotos, color: 'rgba(0, 93, 160, 0.85)' },
          { name: this.resultadoLista[5].candidatoNome, y: this.resultadoLista[5].quantidadeVotos, color: 'rgba(45, 77, 157, 0.85)' },
          { name: this.resultadoLista[6].candidatoNome, y: this.resultadoLista[6].quantidadeVotos, color: 'rgba(0, 0, 0, 0.85)' },
          { name: this.resultadoLista[7].candidatoNome, y: this.resultadoLista[7].quantidadeVotos, color: 'rgba(251, 100, 62, 0.85)' }
        ],
      }]

    });

  }

  ngOnInit() {
  }

}
