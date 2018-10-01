import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CandidatoService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  obterCandidatos() {
    return this._http.get(this.myAppUrl + 'api/Candidatos/ObterCandidatos')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  obterTotalVotos() {
    return this._http.get(this.myAppUrl + 'api/Candidatos/TotalVoto')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  salvaVoto(team) {
    return this._http.put(this.myAppUrl + 'api/Candidatos/UpdateVoteCount', team)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
