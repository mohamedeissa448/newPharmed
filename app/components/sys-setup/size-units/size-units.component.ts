import { SizeUnitsFormComponent } from "./size-units-form/size-units-form.component";
import { SizeUnitsFormService } from "./../services/size-units-form.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatSort,
  MatPaginator,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";

@Component({
  selector: "app-size-units",
  templateUrl: "./size-units.component.html",
  styleUrls: ["./size-units.component.css"]
})
export class SizeUnitsComponent implements OnInit {
  private sizeUnits;
  data;
  searchKey: string;
  private displayedColumns: string[] = ["Name", "Active", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private sizeUnitService: SizeUnitsFormService
  ) {}

  ngOnInit() {
    this.sizeUnitService.getSizeUnits().subscribe((units: []) => {
      console.log("units", units);
      this.sizeUnits = new MatTableDataSource(units);
      this.sizeUnits.sort = this.sort;
      this.sizeUnits.paginator = this.paginator;
    });
  }
  onAdd() {
    this.sizeUnitService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Size Unit" };
    this.dialog.open(SizeUnitsFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.sizeUnitService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Size Unit" };

    this.dialog.open(SizeUnitsFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.sizeUnits.filter = this.searchKey.trim().toLowerCase();
  }
}
