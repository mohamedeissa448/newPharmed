import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class RoutesFormService {
  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      Route_Code: new FormControl(""),
      Route_Name: new FormControl("", [Validators.required]),
      Route_Description: new FormControl(""),
      Route_Cd: new FormControl(""),
      Route_Cddt: new FormControl(""),
      Route_CdPrev: new FormControl(""),
      Route_IsActive: new FormControl("")
    });
  }

  getRoutes() {
    return this.http.get("http://35.234.124.65:5100/getRoute");
  }
  addRoute(route) {
    console.log("added", route);
    /* return this.http.post(
      "http://35.234.124.65:5100/addRoute",
      route //need modification
    );*/
  }
  updateRoute(updateRoute) {
    if (updateRoute.Route_IsActive == false) updateRoute.Route_IsActive = 0;
    console.log("updated", updateRoute);
    /**
     * this.http.post(
      "http://35.234.124.65:5100/editRoute",updateRoute)
     */
  }
  popualteForm(route) {
    console.log("route", route);
    this.form.setValue({
      _id: route._id,
      Route_Code: route.Route_Code || "",
      Route_Name: route.Route_Name,
      Route_Description: route.Route_Description || "",
      Route_Cd: route.Route_Cd || "",
      Route_Cddt: route.Route_Cddt || "",
      Route_CdPrev: route.Route_CdPrev || "",
      Route_IsActive: route.Route_IsActive || ""
    });
  }
}
