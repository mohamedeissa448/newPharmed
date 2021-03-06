<<<<<<< HEAD
import { RoutesFormService } from "../../services/routes-form.service";
=======
import { RoutesFormService } from "./../../services/routes-form.service";
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
import { Component, OnInit, Inject } from "@angular/core";
import { NotificationsService } from "../../services/notifications.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-routes-form",
  templateUrl: "./routes-form.component.html",
  styleUrls: ["./routes-form.component.css"]
})
export class RoutesFormComponent implements OnInit {
  private title;
  constructor(
    private RoutesService: RoutesFormService,
    private notificationService: NotificationsService,
    private dialogRef: MatDialogRef<RoutesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
  }

  ngOnInit() {}
  onClear() {
    this.RoutesService.form.reset();
  }

  onSubmit() {
    if (this.RoutesService.form.valid) {
      //on adding category
      if (this.title === "Add New Route") {
        this.RoutesService.addRoute(
          this.RoutesService.form.value
        ); /*.subscribe(() => {});*/
        this.notificationService.success(":: Added Successfully");
      } else if (this.title === "Edit Route") {
        //update category
        this.RoutesService.updateRoute(this.RoutesService.form.value);
        this.notificationService.success(":: Updated Successfully");
      }
      this.RoutesService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.RoutesService.form.reset();
    this.dialogRef.close();
  }
}
