import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class DoseTypesFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      UsageDoseType_Code: new FormControl(""),
      UsageDoseType_Name: new FormControl("", [Validators.required]),
      UsageDoseType_Description: new FormControl(""),
      UsageDoseType_IsActive: new FormControl("")
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  geteDoseType() {
    return this.http.get(`${systemSettings.serverURL}/getAllUsageDoseType`);
  }
  addDoseType(dosing) {
    console.log("added", dosing);
    return this.http.post(
      `${systemSettings.serverURL}/addUsageDoseType`,
      dosing //need modification
    );
  }
  updateDoseType(updatedDosingType) {
    if (updatedDosingType.UsageAge_IsActive == false)
      updatedDosingType.UsageAge_IsActive = 0;
    console.log("updated", updatedDosingType);
    return this.http.post(
      `${systemSettings.serverURL}/editUsageDoseType`,
      updatedDosingType //need modification
    );
  }
  popualteForm(dosing) {
    console.log("dosing", dosing);
    this.form.setValue({
      _id: dosing._id,
      UsageDoseType_Code: dosing.UsageDoseType_Code,
      UsageDoseType_Name: dosing.UsageDoseType_Name || "",
      UsageDoseType_Description: dosing.UsageDoseType_Description || "",
      UsageDoseType_IsActive: dosing.UsageDoseType_IsActive || ""
    });
  }
}
