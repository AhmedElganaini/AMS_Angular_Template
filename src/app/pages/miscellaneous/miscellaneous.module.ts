import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
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

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
    FileUploadModule,
    ToastModule,
    TableModule,
    FileUploadModule, 
    ButtonModule, 
     ProgressBarModule, 
     ToastModule, 
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
    MiscellaneousComponent,
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }
