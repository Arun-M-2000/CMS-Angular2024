import { Injectable } from '@angular/core';
import { LIDViewModel } from './lidview-model';

@Injectable({
  providedIn: 'root'
})
export class LIDViewModelService {
  lIDViewModel:LIDViewModel
  constructor() { }
}
