import { LayoutModule } from "./../../layout/layout.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routing } from "./dashboard.routing";
import { RouterModule } from "@angular/router";
import { NgxEchartsModule } from "ngx-echarts";

import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IndexComponent } from "./index/index.component";

@NgModule({
  imports: [
    routing,
    NgxEchartsModule,
    RouterModule,
    CommonModule,
    NgbModule,
    RichTextEditorAllModule,
    LayoutModule
  ],
  declarations: [IndexComponent, DashboardComponent]
})
export class DashboardModule {}
