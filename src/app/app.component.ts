/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { NbLayoutDirectionService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  currentTheme = 'default';

  constructor(private analytics: AnalyticsService, private seoService: SeoService,
    private directionService: NbLayoutDirectionService, private themeService: NbThemeService,
    private translate: TranslateService) {
    this.themeService.changeTheme(this.currentTheme);
    this.initTranslate();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    let direction = this.directionService.getDirection();
    if (direction.toString() === "rtl") {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }
}
