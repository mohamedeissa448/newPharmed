<<<<<<< HEAD
import { SysSetupComponent } from "./sys-setup/sys-setup.component";
=======
import { SysSetupAuthGuardService } from "./../../authentication/services/sys-setup-auth-guard.service";
import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
import { LactationCategoryComponent } from "./lactation-category/lactation-category.component";
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
import { from } from "rxjs";
import { StrengthUnitsComponent } from "./strength-units/strength-units.component";
import { WeekDay } from "@angular/common";
import { DosingAgeComponent } from "./dosing-age/dosing-age.component";
import { DoseUnitComponent } from "./dose-units/dose-units.component";
import { DurationUnitComponent } from "./duration-units/duration-units.component";
import { InteractionFoodComponent } from "./interaction-food-list/interaction-food.component";
import { InteractionHerbsComponent } from "./interaction-herbs-list/interaction-herbs.component";
import { InteractionAlcoholComponent } from "./interaction-alcohol/interaction-alcohol.component";
import { PregnancyCategoryComponent } from "./pregnancy-category/pregnancy-category.component";
import { RoutesComponent } from "./routes/routes.component";
import { DashboardComponent } from "../dashboard/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "sys-setup",
    component: DashboardComponent,
    children: [
      {
<<<<<<< HEAD
=======
        path: "manage-routes",
        component: SysSetupRouteComponent,
        data: { title: "RxP CMS Manager » System Setup » Routes" },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
        path: "manage-pharmacological",
        component: PharmacologicalCategories,
        data: {
          title: "RxP CMS Manager » System Setup » Pharmacological Categories"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-routes",
        component: RoutesComponent,
        data: { title: "RxP CMS Manager » System Setup » Routes" }
      },
      {
        path: "manage-forms",
        component: Forms,
        data: {
          title: "RxP CMS Manager » System Setup » Forms"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-strength-units",
        component: StrengthUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Strength Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-weight-units",
        component: WeightUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Weight Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-volume-units",
        component: VolumeUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Volume Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-size-units",
        component: SizeUnitsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Size Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-medical-conditions",
        component: MedicalConditionsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Medical Conditions"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-dosing-age",
        component: DosingAgeComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dosing Age Categories"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-dose-types",
        component: DoseTypeComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dose Types"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-dose-units",
        component: DoseUnitComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Dose Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-duration-units",
        component: DurationUnitComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Duration Units"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-frequency-intervals",
        component: FrequencyIntervalComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Frequency Intervals"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-interaction-food",
        component: InteractionFoodComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Food Lists"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-interaction-herbs",
        component: InteractionHerbsComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Herbs Lists"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-interaction-lab-tests",
        component: InteractionLabComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Lab Lists Tests"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-interaction-alcohol",
        component: InteractionAlcoholComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Alcohols"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-pregnancy-category",
        component: PregnancyCategoryComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Pregnancy Categories"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-lactation-category",
        component: LactationCategoryComponent,
        data: {
          title: "RxP CMS Manager » System Setup » Lactation Categories"
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
