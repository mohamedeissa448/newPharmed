import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { systemSettings } from "../../../app-config";
@Injectable({
  providedIn: "root"
})
export class FormsFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      Form_Code: new FormControl(""),
      Form_Name: new FormControl("", [Validators.required]),
      Form_Description: new FormControl(""),
      Form_Cd: new FormControl(""),
      Form_Cddt: new FormControl(""),
      Form_CdPrev: new FormControl(""),
      Form_IsActive: new FormControl("")
    });
  }

  getForms() {
    return this.http.get("http://35.234.124.65:5100/getForm");
  }
  addForm(form) {
    console.log("added", form);
    return this.http
      .post(`${systemSettings.serverURL}/addForm`, form) //need modification
      .subscribe(x => {
        console.log(x);
      });
  }
  updateForm(updatedForm) {
    if (updatedForm.Form_IsActive == false) updatedForm.Form_IsActive = 0;
    console.log("updated", updatedForm);
    return this.http
      .post(`${systemSettings.serverURL}/editForm`, updatedForm)
      .subscribe(x => {
        console.log(x);
      });
  }
  popualteForm(form) {
    console.log("form", form);
    this.form.setValue({
      _id: form._id,
      Form_Code: form.Form_Code || "",
      Form_Name: form.Form_Name,
      Form_Description: form.Form_Description || "",
      Form_Cd: form.Form_Cd || "",
      Form_Cddt: form.Form_Cddt || "",
      Form_CdPrev: form.Form_CdPrev || "",
      Form_IsActive: form.Form_IsActive || ""
    });
  }
}
