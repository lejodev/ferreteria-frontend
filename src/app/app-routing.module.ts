import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth.component';
import { ProdsListComponent } from './modules/products/components/prods-list/prods-list.component';

const routes: Routes = [
  { path: '', component: ProdsListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
