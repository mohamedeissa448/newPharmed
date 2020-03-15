import { NgModule } from '@angular/core';
import { routing } from './sys-setup.routing';
import { RouterModule } from '@angular/router';
import { SysSetupRouteComponent } from './routes/manage-routes.component';

@NgModule({
    imports: [
        routing,
        RouterModule
    ],
    declarations: [
        SysSetupRouteComponent
    ],
  })
  export class SysSetupModule { }