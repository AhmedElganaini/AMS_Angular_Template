import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS_EN } from '../pages/pages-menu';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private menuChanger = new BehaviorSubject<any[]>(MENU_ITEMS_EN);
  isMenuChanger = this.menuChanger.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changMenu(menu: any) {
    this.menuChanger.next(menu);
  }

}
