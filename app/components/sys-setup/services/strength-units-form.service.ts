import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";

@Injectable({
  providedIn: "root"
})
export class StrengthUnitsFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      StrengthUnit_Code: new FormControl(""),
      StrengthUnit_Name: new FormControl("", [Validators.required]),
      StrengthUnit_Description: new FormControl(""),
      StrengthUnit_IsActive: new FormControl("")
    });
  }

  getStrengthUnits() {
    return this.http.get("http://35.234.124.65:5100/getStrengthUnits");
  }
  addStrengthUnit(strengthUnit) {
    console.log("added", strengthUnit);
    return this.http.post(
      `${systemSettings.serverURL}/addStrengthUnits`,
      strengthUnit //need modification
    );
  }
  updateStrengthUnit(updatedStrengthUnit) {
    if (updatedStrengthUnit.StrengthUnit_IsActive == false)
      updatedStrengthUnit.StrengthUnit_IsActive = 0;
    console.log("updated", updatedStrengthUnit);
    return this.http.post(
      `${systemSettings.serverURL}/editStrengthUnits`,
      updatedStrengthUnit //need modification
    );
  }
  popualteForm(strengthUnit) {
    console.log("strengthUnit", strengthUnit);
    this.form.setValue({
      _id: strengthUnit._id,
      StrengthUnit_Code: strengthUnit.StrengthUnit_Code || "",
      StrengthUnit_Name: strengthUnit.StrengthUnit_Name,
      StrengthUnit_Description: strengthUnit.StrengthUnit_Description || "",
      StrengthUnit_IsActive: strengthUnit.StrengthUnit_IsActive || ""
    });
  }
}
