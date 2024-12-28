import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth.component';
import { AuthGuard } from './modules/auth/guards/auth/auth.guard';
import { BaseComponent } from './theme/layout/base/base.component';
import { RoleType } from './modules/auth/models/role.model';

const routes: Routes = [
  // Path for public, non-protected routes without BaseComponent (and thus without navbar/footer)
  {
    path: '',
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirect to login by default
      { path: 'auth', redirectTo: '/auth/login' }, // Ensure '/auth' redirects to '/auth/login'
      { path: 'auth/login', component: AuthComponent }, // Login route
    ]
  },
  // Path for protected routes with BaseComponent (with navbar, footer, and router-outlet)
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.ADMIN, RoleType.CASHIER] }, // Define required roles for this route
    children: [
      {
        path: 'dashboard', 
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        // Note: You don't need another canActivate here since the parent route already uses AuthGuard
      },
    ]
  },
  // Wildcard route
  { path: '**', redirectTo: 'auth/login' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }