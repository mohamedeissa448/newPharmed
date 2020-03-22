import { Forms } from "./forms/forms.component";
import { PharmacologicalCategories } from "./pharmacological-categories/pharmacological-categories.component";
import { Routes, RouterModule } from "@angular/router";
import { SysSetupRouteComponent } from "./routes/manage-routes.component";

import { from } from "rxjs";
import { StrengthUnitsComponent } from "./strength-units/strength-units.component";

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
      },
      {
        path: "manage-forms",
        component: Forms,
        data: {
          title: "RxP CMS Manager » System Setup » Forms"
        }
      },
      {
        path: "manage-strength-units",
        component: StrengthUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Strength Units"
        }
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
