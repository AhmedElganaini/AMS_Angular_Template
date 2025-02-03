import { Component } from '@angular/core';

import { MENU_ITEMS_AR, MENU_ITEMS_EN } from './pages-menu';
import { NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
    standalone: false
})
export class PagesComponent {

  menu: any;
  currentUserInfo: any;
  currentUserRole: any;
  directions = NbLayoutDirection;
   isLocked: boolean = false;

  constructor(private translateService: TranslateService,
    private data: DataService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.initTranslate();
  }



  initTranslate() {
    let userTranslation = localStorage.getItem('userTranslation');
    userTranslation = (userTranslation) ? userTranslation : 'en';

    if (userTranslation == "ar") {
      this.translateService.use('ar');
      this.secureMenu(MENU_ITEMS_AR)
    } else {
      this.translateService.use('en');
      this.secureMenu(MENU_ITEMS_EN)
    }
  }

  secureMenu(currentMenu: any[]): void {
    this.menu = currentMenu;
    this.menu.forEach(item => {
      // // Initially hide all top-level menu items
      // item.hidden = true;

      // if (item.children) {
      //   // Handle children items
      //   item.children.forEach(child => {
      //     // Check if child has ariaRole and determine visibility based on permissions
      //     child.hidden = child.ariaRole ? !this.permissionService.isGranted(child.ariaRole) : false;
      //   });

      //   // If any child is visible, show the parent item
      //   item.hidden = !item.children.some(child => !child.hidden);
      // } else {
      //   // Determine visibility for top-level items without children
      //   item.hidden = item.ariaRole ? !this.permissionService.isGranted(item.ariaRole) : false;
      // }
    });
    
    this.data.changMenu(this.menu);
    this.data.isMenuChanger.subscribe(f => this.menu = f)
  }

}
