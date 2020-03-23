import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class InteractionFoodFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      UsageFrequenIntervalUnit_Code: new FormControl(""),
      UsageFrequenIntervalUnit_Name: new FormControl("", [Validators.required]),
      UsageFrequenIntervalUnit_Description: new FormControl(""),
      UsageFrequenIntervalUnit_IsActive: new FormControl("")
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getFrequencyIntervals() {
    return this.http.get(`${systemSettings.serverURL}/getFoods`);
  }
  addFrequencyInterval(FrequencyInterval) {
    console.log("added", FrequencyInterval);
    return this.http.post(
      `${systemSettings.serverURL}/addFood`,
      FrequencyInterval //need modification
    );
  }
  updateFrequencyInterval(updatedFrequencyInterval) {
    if (updatedFrequencyInterval.UsageAge_IsActive == false)
      updatedFrequencyInterval.UsageAge_IsActive = 0;
    console.log("updated", updatedFrequencyInterval);
    return this.http.post(
      `${systemSettings.serverURL}/editFood`,
      updatedFrequencyInterval //need modification
    );
  }
  popualteForm(FrequencyInterval) {
    console.log("FrequencyInterval", FrequencyInterval);
    this.form.setValue({
      _id: FrequencyInterval._id,
      UsageFrequenIntervalUnit_Code:
        FrequencyInterval.UsageFrequenIntervalUnit_Code,
      UsageFrequenIntervalUnit_Name:
        FrequencyInterval.UsageFrequenIntervalUnit_Name || "",
      UsageFrequenIntervalUnit_Description:
        FrequencyInterval.UsageFrequenIntervalUnit_Description || "",
      UsageFrequenIntervalUnit_IsActive:
        FrequencyInterval.UsageFrequenIntervalUnit_IsActive || ""
    });
  }
}
