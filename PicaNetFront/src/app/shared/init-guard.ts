import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

import { PicaRepositoryService } from './picarepository.service';

@Injectable()
export class InitGuard implements CanActivate, CanActivateChild {

  constructor(private _picaRepository: PicaRepositoryService){

  }
  
  canActivate() : Promise<boolean> {
    return this._picaRepository.initialize();
  }

  canActivateChild() : Promise<boolean> {
    return this.canActivate();
  }
}