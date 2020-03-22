import { VolumeUnitsComponent } from "./volume-units/volume-units.component";
import { WeightUnitsComponent } from "./Weight-Units/weight-units.component";
import { Forms } from "./forms/forms.component";
import { PharmacologicalCategories } from "./pharmacological-categories/pharmacological-categories.component";
import { Routes, RouterModule } from "@angular/router";
import { SysSetupRouteComponent } from "./routes/manage-routes.component";

import { from } from "rxjs";
import { StrengthUnitsComponent } from "./strength-units/strength-units.component";
import { WeekDay } from "@angular/common";

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
      },
      {
        path: "manage-weight-units",
        component: WeightUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Weight Units"
        }
      },
      {
        path: "manage-volume-units",
        component: VolumeUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Volume Units"
        }
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
