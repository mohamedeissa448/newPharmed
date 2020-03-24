import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        children: [
          { path: "", redirectTo: "index", pathMatch: "full" },
          {
            path: "index",
            component: IndexComponent,
            data: { title: "RxP CMS Manager » Dashboard" }
          }
        ]
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
