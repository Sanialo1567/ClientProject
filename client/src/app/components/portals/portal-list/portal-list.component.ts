import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CathegoryService, WebPortalService } from 'src/app/api/services';
import { Portal } from 'src/app/model/portal';

@Component({
  selector: 'app-portal-list',
  templateUrl: './portal-list.component.html',
  styleUrls: ['./portal-list.component.css']
})
export class PortalListComponent implements OnInit {

  private _cathegoryId?: string;
  @Input() set cathegoryId(value: string) {
    if(this._cathegoryId !== value){
      this.webPortalService.getApiWebPortalsCathegoryCathegoryId(value).subscribe(res => {
        if((<any>res)[0] !== null) {
          this.portals = <Portal[]><any>res;
        } else {
          this.portals = [];
        }
      })
    }
    this._cathegoryId = value;
  }

  @Input() portals: Portal[] = [];

  constructor(
    private webPortalService: WebPortalService) { }

  ngOnInit(): void {  
      
  }

}
