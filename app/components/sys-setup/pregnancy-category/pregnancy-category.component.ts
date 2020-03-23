import { PregnancyCategoryFormService } from "./../services/pregnancy-category-form";
import { InteractionAlcoholFormService } from "./../services/interaction-alcohol-ltobacco-form";
import { InteractionLabFormService } from "./../services/interaction-lab-list-form";
import { InteractionHerbsFormService } from "./../services/interaction-herbs-list-form ";
import { InteractionFoodFormService } from "./../services/interaction-food-list-form";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource,
  MatDialogConfig
} from "@angular/material";
import { PregnancyCategoryFormComponent } from "./pregnancy-category-form/pregnancy-category-form.component";

@Component({
  selector: "app-pregnancy-category",
  templateUrl: "./pregnancy-category.component.html",
  styleUrls: ["./pregnancy-category.component.css"]
})
export class PregnancyCategoryComponent implements OnInit {
  private pregnancyCategories;
  data;
  searchKey: string;
  private displayedColumns: string[] = ["Name", "Description", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private PregnancyCategoryFormService: PregnancyCategoryFormService
  ) {}

  ngOnInit() {
    this.PregnancyCategoryFormService.getPregnancyCategories().subscribe(
      (Alcohols: []) => {
        console.log("Alcohols", Alcohols);
        this.pregnancyCategories = new MatTableDataSource(Alcohols);
        this.pregnancyCategories.sort = this.sort;
        this.pregnancyCategories.paginator = this.paginator;
      }
    );
  }
  onAdd() {
    this.PregnancyCategoryFormService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Pregnancy Category" };
    this.dialog.open(PregnancyCategoryFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.PregnancyCategoryFormService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Pregnancy Category" };

    this.dialog.open(PregnancyCategoryFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.pregnancyCategories.filter = this.searchKey.trim().toLowerCase();
  }
}
