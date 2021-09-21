import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiResultsPageRoutingModule } from './api-results-routing.module';

import { ApiResultsPage } from './api-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiResultsPageRoutingModule
  ],
  declarations: [ApiResultsPage]
})
export class ApiResultsPageModule {}
