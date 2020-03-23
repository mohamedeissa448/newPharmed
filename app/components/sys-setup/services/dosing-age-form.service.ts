import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class DosingAgeFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      UsageAge_Code: new FormControl(""),
      UsageAge_Name: new FormControl("", [Validators.required]),
      UsageAge_Description: new FormControl(""),
      UsageAge_IsActive: new FormControl("")
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getDosingAges() {
    return this.http.get(`${systemSettings.serverURL}/getAllUsageAge`);
  }
  addDosingAge(dosing) {
    console.log("added", dosing);
    return this.http.post(
      `${systemSettings.serverURL}/addUsageAge`,
      dosing //need modification
    );
  }
  updateDosingAge(updatedDosingAge) {
    if (updatedDosingAge.UsageAge_IsActive == false)
      updatedDosingAge.UsageAge_IsActive = 0;
    console.log("updated", updatedDosingAge);
    return this.http.post(
      `${systemSettings.serverURL}/editUsageAge`,
      updatedDosingAge //need modification
    );
  }
  popualteForm(dosing) {
    console.log("dosing", dosing);
    this.form.setValue({
      _id: dosing._id,
      UsageAge_Code: dosing.UsageAge_Code,
      UsageAge_Name: dosing.UsageAge_Name || "",
      UsageAge_Description: dosing.UsageAge_Description || "",
      UsageAge_IsActive: dosing.UsageAge_IsActive || ""
    });
  }
}
