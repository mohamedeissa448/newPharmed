import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";
import { RoutesFormService } from "../services/routes-form.service";
import { RoutesFormComponent } from "./routes-form/routes-form.component";

@Component({
  selector: "app-routes",
  templateUrl: "./manage-routes.component.html",
  styleUrls: ["./manage-routes.component.css"]
})
export class SysSetupRouteComponent implements OnInit {
  private forms;
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
    private RoutesService: RoutesFormService
  ) {}

  ngOnInit() {
    this.RoutesService.getRoutes().subscribe((routes: []) => {
      console.log("routes", routes);
      this.forms = new MatTableDataSource(routes);
      this.forms.sort = this.sort;
      this.forms.paginator = this.paginator;
    });
  }
  onAdd() {
    this.RoutesService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Route" };
    this.dialog.open(RoutesFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.RoutesService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Route" };

    this.dialog.open(RoutesFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    if (this.searchKey) this.forms.filter = this.searchKey.trim().toLowerCase();
  }
}
