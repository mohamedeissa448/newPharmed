import { Routes, RouterModule } from '@angular/router';
import { SysSetupRouteComponent } from './routes/manage-routes.component';

import { from } from 'rxjs';

const routes: Routes = [   
    {
        path: 'sys-setup',
        children: [
            {
                path: 'manage-routes', component: SysSetupRouteComponent, data: { title: 'RxP CMS Manager » System Setup » Routes' } 
            },
        ]
    },
    
];

export const routing = RouterModule.forChild(routes);