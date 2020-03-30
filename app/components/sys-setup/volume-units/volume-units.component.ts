import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";
import { VolumeUnitsFormService } from "./../services/volume-units-form.service";
import { VolumeUnitsFormComponent } from "./volume-units-form/volume-units-form.component";

@Component({
  selector: "app-volume-units",
  templateUrl: "./volume-units.component.html",
  styleUrls: ["./volume-units.component.css"]
})
export class VolumeUnitsComponent implements OnInit {
  private volumeUnits;
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
    private VolumeUnitsFormService: VolumeUnitsFormService
  ) {}

  ngOnInit() {
    this.VolumeUnitsFormService.getVolumeUnits().subscribe((units: []) => {
      console.log("units", units);
      this.volumeUnits = new MatTableDataSource(units);
      this.volumeUnits.sort = this.sort;
      this.volumeUnits.paginator = this.paginator;
    });
  }
  onAdd() {
    this.VolumeUnitsFormService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Volume Unit" };
    this.dialog.open(VolumeUnitsFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.VolumeUnitsFormService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Volume Unit" };

    this.dialog.open(VolumeUnitsFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.volumeUnits.filter = this.searchKey.trim().toLowerCase();
  }
}
