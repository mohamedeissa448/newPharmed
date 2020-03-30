import { Component, OnInit, Inject } from "@angular/core";
import { NotificationsService } from "../../services/notifications.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DoseTypesFormService } from "../../services/dosing-types-form.service";

@Component({
  selector: "app-dose-types-form",
  templateUrl: "./dose-type-form.component.html",
  styleUrls: ["./dose-type-form.component.css"]
})
export class DoseTypeFormComponent implements OnInit {
  private title;
  constructor(
    private doseTypeFormService: DoseTypesFormService,
    private notificationService: NotificationsService,
    private dialogRef: MatDialogRef<DoseTypeFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
  }

  ngOnInit() {}
  onClear() {
    this.doseTypeFormService.form.reset();
  }

  onSubmit() {
    if (this.doseTypeFormService.form.valid) {
      //on adding category
      if (this.title === "Add New Dose Type") {
        this.doseTypeFormService.addDoseType(
          this.doseTypeFormService.form.value
        ); /*.subscribe(() => {});*/
        this.notificationService.success(":: Added Successfully");
      } else if (this.title === "Edit Dose Type") {
        //update dosing
        this.doseTypeFormService.updateDoseType(
          this.doseTypeFormService.form.value
        );
        this.notificationService.success(":: Updated Successfully");
      }
      this.doseTypeFormService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.doseTypeFormService.form.reset();
    this.dialogRef.close();
  }
}
