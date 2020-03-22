import { PharmacologicalCategories } from "./pharmacological-categories/pharmacological-categories.component";
import { Routes, RouterModule } from "@angular/router";
import { SysSetupRouteComponent } from "./routes/manage-routes.component";

import { from } from "rxjs";

const routes: Routes = [
  {
    path: "sys-setup",
    children: [
      {
        path: "manage-routes",
        component: SysSetupRouteComponent,
        data: { title: "RxP CMS Manager » System Setup » Routes" }
      },
      {
        path: "manage-pharmacological",
        component: PharmacologicalCategories,
        data: {
          title: "RxP CMS Manager » System Setup » Pharmacological Categories"
        }
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
