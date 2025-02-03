/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { NbLayoutDirection, NbLayoutDirectionService, NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
    standalone: false
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
    let userTranslation = localStorage.getItem('userTranslation');
    userTranslation = (userTranslation) ? userTranslation : 'en';
    this.translate.setDefaultLang(userTranslation);

    if (userTranslation == "ar") {
      this.translate.setDefaultLang(userTranslation);
      this.translate.use('ar');
      this.directionService.setDirection(NbLayoutDirection.RTL);
    } else {
      this.translate.setDefaultLang(userTranslation);
      this.translate.use('en');
      this.directionService.setDirection(NbLayoutDirection.LTR);
    }
  }
}
