<<<<<<< HEAD
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
=======
import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./index/index.component";
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734

const routes: Routes = [
  {
    path: "",
<<<<<<< HEAD
    component: DashboardComponent,
=======
    canActivate: [AuthGuardService],
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        children: [
          { path: "", redirectTo: "index", pathMatch: "full" },
          {
            path: "index",
<<<<<<< HEAD
            component: IndexComponent,
=======
            component: DashboardComponent,
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
            data: { title: "RxP CMS Manager » Dashboard" }
          }
        ]
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
