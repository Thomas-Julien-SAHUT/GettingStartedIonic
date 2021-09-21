import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiResultsPage } from './api-results.page';

const routes: Routes = [
  {
    path: '',
    component: ApiResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiResultsPageRoutingModule {}
