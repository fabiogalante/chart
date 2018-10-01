import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { PercentPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {CandidatoService} from '../services/teamservice.service';



@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {

  public candidatosLista: CandidatoDados[];

  constructor(public http: Http, private candidatoService: CandidatoService, private _router: Router) {
    this.obterCandidatosLista();
  }

  obterCandidatosLista() {
    this.candidatoService.obterCandidatos().subscribe(
      data => this.candidatosLista = data
    );
  }

  salvar(candidato) {
    this.candidatoService.salvaVoto(candidato)
      .subscribe((data) => {
        this._router.navigate(['/resultado']);
      });
  }

  ngOnInit() {
  }

}

export class CandidatoDados {
  candidatoId: number;
  candidatoNome: string;
  quantidadeVotos: number;
  quantidadeCompartilhado: number;
}
