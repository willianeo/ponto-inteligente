import { TestBed } from '@angular/core/testing';

import { CadastrarPjService } from './cadastrar-pj.service';

describe('CadastroPjService', () => {
  let service: CadastrarPjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarPjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
