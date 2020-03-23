import { DoseUnitsFormService } from "./../services/dose-units-form.service";
import { DoseTypesFormService } from "./../services/dosing-types-form.service";
import { DosingAgeFormService } from "./../services/dosing-age-form.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";
import { DoseUnitFormComponent } from "./dose-units-form/dose-units-form.component";

@Component({
  selector: "app-dose-units",
  templateUrl: "./dose-units.component.html",
  styleUrls: ["./dose-units.component.css"]
})
export class DoseUnitComponent implements OnInit {
  private doseUnits;
  data;
  searchKey: string;
  private displayedColumns: string[] = [
    "Name",
    "Description",
    "Active",
    "Actions"
  ];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private DoseUnitFormService: DoseUnitsFormService
  ) {}

  ngOnInit() {
    this.DoseUnitFormService.getDoseUnits().subscribe((dosingUnits: []) => {
      console.log("dosingTypes", dosingUnits);
      this.doseUnits = new MatTableDataSource(dosingUnits);
      this.doseUnits.sort = this.sort;
      this.doseUnits.paginator = this.paginator;
    });
  }
  onAdd() {
    this.DoseUnitFormService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Dose Unit" };
    this.dialog.open(DoseUnitFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.DoseUnitFormService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Dose Unit" };

    this.dialog.open(DoseUnitFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.doseUnits.filter = this.searchKey.trim().toLowerCase();
  }
}
