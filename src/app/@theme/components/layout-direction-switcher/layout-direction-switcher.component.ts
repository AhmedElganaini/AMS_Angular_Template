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
      this.translate.use('ar');
      this.data.changMenu(MENU_ITEMS_AR);
    } else {
      this.translate.use('en');
      this.data.changMenu(MENU_ITEMS_EN);

    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
