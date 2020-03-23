import { DurationUnitsFormService } from "./../services/duration-units-form.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";
import { DurationUnitsFormComponent } from "./duration-units-form/duration-units-form.component";

@Component({
  selector: "app-duration-units",
  templateUrl: "./duration-units.component.html",
  styleUrls: ["./duration-units.component.css"]
})
export class DurationUnitComponent implements OnInit {
  private durationUnits;
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
    private DurationUnitsFormService: DurationUnitsFormService
  ) {}

  ngOnInit() {
    this.DurationUnitsFormService.getDurationUnits().subscribe(
      (durationUnits: []) => {
        console.log("durationUnits", durationUnits);
        this.durationUnits = new MatTableDataSource(durationUnits);
        this.durationUnits.sort = this.sort;
        this.durationUnits.paginator = this.paginator;
      }
    );
  }
  onAdd() {
    this.DurationUnitsFormService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Duration Unit" };
    this.dialog.open(DurationUnitsFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.DurationUnitsFormService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Duration Unit" };

    this.dialog.open(DurationUnitsFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.durationUnits.filter = this.searchKey.trim().toLowerCase();
  }
}
