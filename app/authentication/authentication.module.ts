<<<<<<< HEAD
=======
import { HttpClientModule } from "@angular/common/http";
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageLoginComponent } from "./page-login/page-login.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { routing } from "./authentication.routing";
import { PageRegisterComponent } from "./page-register/page-register.component";
import { PageLockscreenComponent } from "./page-lockscreen/page-lockscreen.component";
import { PageForgotPasswordComponent } from "./page-forgot-password/page-forgot-password.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PageForbiddonErrorComponent } from "./page-forbiddon-error/page-forbiddon-error.component";
import { PageIsErrorComponent } from "./page-is-error/page-is-error.component";
import { PageTryLaterComponent } from "./page-try-later/page-try-later.component";
<<<<<<< HEAD
//import { PagesModule } from '../pages/pages.module';
=======
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PageLoginComponent,
    AuthenticationComponent,
    PageRegisterComponent,
    PageLockscreenComponent,
    PageForgotPasswordComponent,
    PageNotFoundComponent,
    PageForbiddonErrorComponent,
    PageIsErrorComponent,
    PageTryLaterComponent
  ],
<<<<<<< HEAD
  imports: [
    CommonModule,
    routing,
    //	PagesModule,
    RouterModule,
    FormsModule
  ]
=======
  imports: [CommonModule, routing, RouterModule, FormsModule, HttpClientModule]
>>>>>>> c9052aa9c6378af8486bc058cb77d758dee2b734
})
export class AuthenticationModule {}
