import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http'; 
import { systemSettings } from './../../../app-config';

@Component({
	selector: 'app-sys-setup',
	templateUrl: './manage-routes.component.html',
	styleUrls: ['./manage-routes.component.scss']
})
export class SysSetupRouteComponent implements OnInit, OnDestroy {

	constructor(private activatedRoute: ActivatedRoute, private sidebarService: SidebarService, private http: HttpClient) {
		
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
	ngOnInit() { 
        console.log('hello route')
		this.http.post(systemSettings.serverURL +"SearchRoute", JSON.stringify({search_field: 'au'}), this.httpOptions)
        .subscribe(function (data: any){
            console.log(data.route);
            }
        )
    }
    
    ngOnDestroy() {
        
    }

}
