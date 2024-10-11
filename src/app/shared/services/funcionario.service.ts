import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly PATH: string = 'funcionarios';
  private readonly PATH_FUNC_POR_EMPRESA = '/empresa/{empresaId}';

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  listarFuncionariosPorEmpresa(): Observable<any> {
    var url: string = env.baseApiUrl + this.PATH + this.PATH_FUNC_POR_EMPRESA.replace('{empresaId}', this.httpUtil.obterIdEmpresa());
    return this.http.get(url, this.httpUtil.headers());
  }
}
