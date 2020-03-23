import { InteractionLabComponent } from "./interaction-lab-tests-list/interaction-lab-tests.component";
import { FrequencyIntervalComponent } from "./frequency-intervals/frequency-intervals.component";
import { DoseTypeComponent } from "./dose-type/dose-type.component";
import { MedicalConditionsComponent } from "./medical-conditions/medical-conditions.component";
import { SizeUnitsComponent } from "./size-units/size-units.component";
import { VolumeUnitsComponent } from "./volume-units/volume-units.component";
import { WeightUnitsComponent } from "./Weight-Units/weight-units.component";
import { Forms } from "./forms/forms.component";
import { PharmacologicalCategories } from "./pharmacological-categories/pharmacological-categories.component";
import { Routes, RouterModule } from "@angular/router";
import { SysSetupRouteComponent } from "./routes/manage-routes.component";

import { from } from "rxjs";
import { StrengthUnitsComponent } from "./strength-units/strength-units.component";
import { WeekDay } from "@angular/common";
import { DosingAgeComponent } from "./dosing-age/dosing-age.component";
import { DoseUnitComponent } from "./dose-units/dose-units.component";
import { DurationUnitComponent } from "./duration-units/duration-units.component";
import { InteractionFoodComponent } from "./interaction-food-list/interaction-food.component";
import { InteractionHerbsComponent } from "./interaction-herbs-list/interaction-herbs.component";
import { InteractionAlcoholComponent } from "./interaction-alcohol/interaction-alcohol.component";

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
      },
      {
        path: "manage-size-units",
        component: SizeUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Size Units"
        }
      },
      {
        path: "manage-medical-conditions",
        component: MedicalConditionsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Medical Conditions"
        }
      },
      {
        path: "manage-dosing-age",
        component: DosingAgeComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dosing Age Categories"
        }
      },
      {
        path: "manage-dose-types",
        component: DoseTypeComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dose Types"
        }
      },
      {
        path: "manage-dose-units",
        component: DoseUnitComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dose Units"
        }
      },
      {
        path: "manage-duration-units",
        component: DurationUnitComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Duration Units"
        }
      },
      {
        path: "manage-frequency-intervals",
        component: FrequencyIntervalComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Frequency Intervals"
        }
      },
      {
        path: "manage-interaction-food",
        component: InteractionFoodComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Food Lists"
        }
      },
      {
        path: "manage-interaction-herbs",
        component: InteractionHerbsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Herbs Lists"
        }
      },
      {
        path: "manage-interaction-lab-tests",
        component: InteractionLabComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Lab Lists Tests"
        }
      },
      {
        path: "manage-interaction-alcohol",
        component: InteractionAlcoholComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Alcohols"
        }
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
