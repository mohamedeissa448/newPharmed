import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class MedicalConditionsFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      MedicalCondition_Code: new FormControl(""),
      MedicalCondition_Name: new FormControl("", [Validators.required]),
      MedicalCondition_Description: new FormControl(""),
      MedicalCondition_ICD9cm: new FormControl(""),
      MedicalCondition_ICD10cm: new FormControl("", [Validators.required]),
      MedicalCondition_ICD10cmAM: new FormControl(""),
      MedicalCondition_ICD11cm: new FormControl(""),
      MedicalCondition_IsActive: new FormControl("")
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getMedicalConditions() {
    return this.http.get(`${systemSettings.serverURL}/getAllMedicalCondition`);
  }
  addMedicalCondition(condition) {
    console.log("added", condition);
    return this.http
      .post(
        `${systemSettings.serverURL}/addMedicalCondition`,
        { data: condition } //need modification
      )
      .subscribe(x => {});
  }
  updateMedicalCondition(updatedCondition) {
    if (updatedCondition.MedicalCondition_IsActive == false)
      updatedCondition.MedicalCondition_IsActive = 0;
    console.log("updated", updatedCondition);
    return this.http
      .post(
        `${systemSettings.serverURL}/editMedicalCondition`,
        updatedCondition //need modification
      )
      .subscribe(x => {});
    console.log("updated", updatedCondition);
  }
  popualteForm(condition) {
    console.log("Medical condition", condition);
    console.log("Medical test", condition.MedicalCondition_Description);
    this.form.setValue({
      _id: condition._id,
      MedicalCondition_Code: condition.MedicalCondition_Code,
      MedicalCondition_Name: condition.MedicalCondition_Name,
      MedicalCondition_Description:
        condition.MedicalCondition_Description || "",
      MedicalCondition_ICD9cm: condition.MedicalCondition_ICD9cm || "",
      MedicalCondition_ICD10cm: condition.MedicalCondition_ICD10cm,
      MedicalCondition_ICD10cmAM: condition.MedicalCondition_ICD10cmAM || "",
      MedicalCondition_IsActive: condition.MedicalCondition_IsActive,
      MedicalCondition_ICD11cm: condition.MedicalCondition_ICD11cm || ""
    });
  }
}
