import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

// Configuration static des routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dash', component: DashboardComponent, data: {
      appName: 'JLG Consulting',
    }
  },
  {
    path: 'table', component: TableComponent, data: {
      title: 'My Table',
    }
  },
  { path: '**', redirectTo: '/' }
];

// La configuration est passé au module RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
