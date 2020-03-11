import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo:'admin', pathMatch: 'full'},
    { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });