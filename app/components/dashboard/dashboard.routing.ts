import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './index/index.component';


const routes: Routes = [   
    {
        path: '',
        children: [
            { path: '', redirectTo:'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: DashboardComponent, data: { title: 'RxP CMS Manager » Dashboard' } },
                ]
            }
        ] 
    },
    
];

export const routing = RouterModule.forChild(routes);