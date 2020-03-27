import { WeightUnitsFormComponent } from "./weight-units-form/weight-units-form.component";
import { WeightUnitsFormService } from "./../services/weight-units-form.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";

@Component({
  selector: "app-weight-units",
  templateUrl: "./weight-units.component.html",
  styleUrls: ["./weight-units.component.css"]
})
export class WeightUnitsComponent implements OnInit {
  private weightUnits;
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
    private weightUnitService: WeightUnitsFormService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.weightUnitService.getWeightUnits().subscribe((units: []) => {
      console.log("units", units);
      this.weightUnits = new MatTableDataSource(units);
      this.weightUnits.sort = this.sort;
      this.weightUnits.paginator = this.paginator;
    });
  }
  onAdd() {
    this.weightUnitService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Weight Unit" };
    this.dialog.open(WeightUnitsFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.weightUnitService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Weight Unit" };

    this.dialog.open(WeightUnitsFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.weightUnits.filter = this.searchKey.trim().toLowerCase();
  }
}
