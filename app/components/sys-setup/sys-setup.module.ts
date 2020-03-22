import { PharmacologicalCategoriesFormComponent } from "./pharmacological-categories/pharmacological-categories-form/pharmacological-categories-form.component";
import { NgModule } from "@angular/core";
import { routing } from "./sys-setup.routing";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatNativeDateModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { SysSetupRouteComponent } from "./routes/manage-routes.component";
import { PharmacologicalCategories } from "./pharmacological-categories/pharmacological-categories.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    routing,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    SysSetupRouteComponent,
    PharmacologicalCategoriesFormComponent,
    PharmacologicalCategories
  ],
  entryComponents: [PharmacologicalCategoriesFormComponent]
})
export class SysSetupModule {}
