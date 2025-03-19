import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth.component';
import { AuthGuard } from './modules/auth/guards/auth/auth.guard';
import { BaseComponent } from './theme/layout/base/base.component';
import { Employee } from './modules/auth/models/role.model';
import { NewSaleComponent } from './modules/sales/components/new-sale/new-sale.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SalesLayoutComponent } from './modules/sales/components/sales-layout/sales-layout.component';
import { StockLayoutComponent } from './modules/stock/components/stock-layout/stock-layout.component';

const routes: Routes = [
  // Path for public, non-protected routes without BaseComponent (and thus without navbar/footer)
  {
    path: 'auth',
    component: AuthComponent, // Use AuthComponent as the container for all auth-related routes
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect /auth to /auth/login
      { path: 'register', component: RegisterComponent }, // Register route
      { path: 'login', component: LoginComponent }, // Login route
    ]
  },

  // Path for protected routes with BaseComponent (with navbar, footer, and router-outlet)
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    data: { roles: [Employee.ADMIN, Employee.SELLER] }, // Define required roles for this route
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        // Note: You don't need another canActivate here since the parent route already uses AuthGuard
      },
      {
        path: 'sales',
        component: SalesLayoutComponent
      },
      {
        path: 'stock', component: StockLayoutComponent,
        canActivate: [AuthGuard],
        data: {roles: [Employee.ADMIN, Employee.CHIEF]}
      },
    ]
  },
 
  // Wildcard route
  { path: '**', redirectTo: 'auth', 
  } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }