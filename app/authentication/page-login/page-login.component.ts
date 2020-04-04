<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	onSubmit(){
		this.router.navigate(['/admin/dashboard/index']);
	}
=======
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.css"]
})
export class PageLoginComponent {
  private invalidLogIn = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  onSubmit(credentials) {
    console.log("credentials", credentials);
    this.authService.logIn(credentials).subscribe(result => {
      if (result) {
        this.router.navigate([
          this.activatedRoute.snapshot.queryParams["returnUrl"] ||
            "/dashboard/index"
        ]);
      } else {
        this.invalidLogIn = true;
      }
    });
  }
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
}
