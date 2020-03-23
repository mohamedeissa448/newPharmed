import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class InteractionLabFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      LabTest_Code: new FormControl(""),
      LabTest_Name: new FormControl("", [Validators.required]),
      LabTest_Description: new FormControl(""),
      LabTest_IsActive: new FormControl("")
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getHerbsLists() {
    return this.http.get(`${systemSettings.serverURL}/getLabTest`);
  }
  addFoodList(labList) {
    console.log("added", labList);
    return this.http.post(
      `${systemSettings.serverURL}/addLabTest`,
      labList //need modification
    );
  }
  updateHerbsList(updatedLabList) {
    if (updatedLabList.LabTest_IsActive == false)
      updatedLabList.LabTest_IsActive = 0;
    console.log("updated", updatedLabList);
    return this.http.post(
      `${systemSettings.serverURL}/editLabTest`,
      updatedLabList //need modification
    );
  }
  popualteForm(labList) {
    console.log("labList", labList);
    this.form.setValue({
      _id: labList._id,
      LabTest_Description: labList.LabTest_Description || "",
      LabTest_Code: labList.LabTest_Code || "",
      LabTest_Name: labList.LabTest_Name,
      LabTest_IsActive: labList.LabTest_IsActive || ""
    });
  }
}
