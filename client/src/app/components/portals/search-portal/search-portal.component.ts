import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebPortalService } from 'src/app/api/services';
import { Portal } from 'src/app/model/portal';

@Component({
  selector: 'app-search-portal',
  templateUrl: './search-portal.component.html',
  styleUrls: ['./search-portal.component.css']
})
export class SearchPortalComponent implements OnInit {
  queryString: string = '';
  portals: Portal[] = [];

  constructor(
    private route: ActivatedRoute,
    private webPortalsService: WebPortalService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => {
      this.updateQuery()
    })
    this.updateQuery()
  }

  updateQuery() {
    this.queryString = this.route.snapshot.params.query;
    this.webPortalsService.getApiWebPortals().subscribe(res => {
      this.portals = (<Portal[]><any>res).filter(x => x.name.toLowerCase().includes(this.queryString.toLowerCase())||
      x.description.toLowerCase().includes(this.queryString.toLowerCase()));
    })
  }
}