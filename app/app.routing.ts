﻿import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo:'dashboard', pathMatch: 'full'},
    { path: 'sys-setup', loadChildren: () => import('../app/components/sys-setup/sys-setup.module').then(m => m.SysSetupModule) },
    { path: 'dashboard', loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });