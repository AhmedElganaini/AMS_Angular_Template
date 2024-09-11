import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FileUploadModule,
    ToastModule,
    TableModule,
    ButtonModule, 
     ProgressBarModule, 
     BadgeModule,
     CardModule,
     TagModule, 
     RatingModule,
     CommonModule,
      DialogModule,
       RippleModule, 
      ToolbarModule, 
     ConfirmDialogModule,
      InputTextModule, 
      InputTextareaModule, 
      DropdownModule,
      RadioButtonModule, 
       InputTextModule,
       FormsModule, 
       InputNumberModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
