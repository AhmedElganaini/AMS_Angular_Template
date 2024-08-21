import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { StateService } from '../../../@core/utils';

@Component({
  selector: 'ngx-toggle-settings-button',
  styleUrls: ['./toggle-settings-button.component.scss'],
  template: `
    <button class="toggle-settings" id="settingBtnID"
            (click)="toggleSettings()"
            [class.expanded]="expanded"
            [class.sidebar-end]="sidebarEnd"
            [class.was-expanded]="wasExpanded"
    >
      <i class="nb-gear icon-style"></i>
    </button>
  `,
})
export class ToggleSettingsButtonComponent {

  sidebarEnd = false;
  expanded = false;
  wasExpanded = false;

  constructor(private sidebarService: NbSidebarService, protected stateService: StateService) {
    let settingSideBarID = document.getElementById('settingSideBarID');
    if (settingSideBarID) {
      let lists = settingSideBarID.classList;
      if (lists && lists.contains('expanded')) {
        lists.remove('expanded')
        lists.add('collapsed')

      }

    }
      this.stateService.onSidebarState()
      .subscribe(({ id }) => {
        this.sidebarEnd = id === 'end';
      });
  }

  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    let settingElement = document.getElementById('settingBtnID');
    if (settingElement) {
      let lists = settingElement.classList;
      if (lists && lists.contains('expanded')) {
        lists.remove('expanded')
      } else {
        lists.add('expanded')
      }
    }

    this.wasExpanded = true;
  }
}
