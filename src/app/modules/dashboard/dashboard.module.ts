import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KpisComponent } from './components/dashboard/kpis/kpis.component';
import { QuickActionsComponent } from './components/dashboard/quick-actions/quick-actions.component';
import { GraphsComponent } from './components/dashboard/graphs/graphs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { DashboardRoutingModule } from './dashboard.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    KpisComponent,
    QuickActionsComponent,
    GraphsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
   exports:[DashboardComponent ]
})
export class DashboardModule { }
