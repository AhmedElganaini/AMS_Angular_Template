import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { takeWhile } from 'rxjs/operators';
import { StateService } from '../../../@core/utils';
import { MENU_ITEMS_AR, MENU_ITEMS_EN } from '../../../pages/pages-menu';
import { DataService } from '../../../services/data.service';
@Component({
    selector: 'ngx-layout-direction-switcher',
    template: `
    <ngx-switcher
      [firstValue]="directions.LTR"
      [secondValue]="directions.RTL"
      [firstValueLabel]="'EN'"
      [secondValueLabel]="'AR'"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical"
    >
    </ngx-switcher>
  `,
    standalone: false
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  alive = true;

  @Input() vertical: boolean = false;

  constructor(private translate: TranslateService,
    private directionService: NbLayoutDirectionService,
    protected stateService: StateService, private data: DataService) {
    this.currentDirection = this.directionService.getDirection();

    this.directionService.onDirectionChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  toggleDirection(newDirection) {
    this.directionService.setDirection(newDirection);
    if (newDirection == "rtl") {
      localStorage.setItem('userTranslation', 'ar');
      this.translate.use('ar');
      this.secureMenu(MENU_ITEMS_AR);
    } else {
      localStorage.setItem('userTranslation', 'en');
      this.translate.use('en');
      this.secureMenu(MENU_ITEMS_EN);

    }
  }

  secureMenu(currentMenu) {
    currentMenu.forEach(item => {
      // Initially hide all top-level menu items
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

    this.data.changMenu(currentMenu);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
