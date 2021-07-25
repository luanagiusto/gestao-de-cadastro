import { HeaderDataP } from './../../products/header-p-data-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderDataC } from '../../clients/header-c-data-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerDataP = new BehaviorSubject<HeaderDataP>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerDataP(): HeaderDataP {
    return this._headerDataP.value
  }

  set headerDataP(headerData: HeaderDataP) {
    this._headerDataP.next(headerData)
  }

  get headerDataC(): HeaderDataC {
    return this._headerDataP.value
  }

  set headerDataC(headerData: HeaderDataC) {
    this._headerDataP.next(headerData)
  }
}
