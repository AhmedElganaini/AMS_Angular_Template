import { Component } from '@angular/core';

import { MENU_ITEMS_AR, MENU_ITEMS_EN } from './pages-menu';
import { NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = [];

  constructor(private translateService: TranslateService,
    private directionService: NbLayoutDirectionService,
    private data: DataService) {
    this.initTranslate();
    this.secureMenu();
  }

  initTranslate() {
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    let direction = this.directionService.getDirection();
    direction.toString() === "ar" ? this.menu = MENU_ITEMS_AR : this.menu = MENU_ITEMS_EN;
    this.translateService.currentLang === 'ar' ? this.menu = MENU_ITEMS_AR : this.menu = MENU_ITEMS_EN;
  }

  secureMenu() {
    // this.menu = MENU_ITEMS_EN;
    this.data.isMenuChanger.subscribe(f => this.menu = f)
  

    this.data.changMenu(this.menu);
  }
}
