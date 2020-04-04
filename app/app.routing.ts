<<<<<<< HEAD
﻿import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: "", redirectTo: "admin", pathMatch: "full" },
  {
    path: "admin",
    loadChildren: () =>
      import("../app/admin/admin.module").then(m => m.AdminModule)
=======
﻿import { AuthGuardService } from "./authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "sys-setup",
    loadChildren: () =>
      import("../app/components/sys-setup/sys-setup.module").then(
        m => m.SysSetupModule
      )
    //canActivate: [AuthGuardService]
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("../app/components/dashboard/dashboard.module").then(
        m => m.DashboardModule
      )
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
  },
  {
    path: "authentication",
    loadChildren: () =>
      import("../app/authentication/authentication.module").then(
        m => m.AuthenticationModule
      )
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
