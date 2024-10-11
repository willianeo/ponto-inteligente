import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroPf } from '../models';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPf);
  }

}
