import { Component, OnInit } from '@angular/core';
import { UserService, WebPortalService } from 'src/app/api/services';

@Component({
  selector: 'app-tyktyk',
  templateUrl: './tyktyk.component.html',
  styleUrls: ['./tyktyk.component.css']
})
export class TyktykComponent implements OnInit {

  constructor(
      private userService: UserService,
      private webPortalService: WebPortalService
    ) { }

  ngOnInit(): void {
    // this.userService.getApiUsers().subscribe((data) => {
    //   console.log(data)
    // })

    // this.webPortalService.getApiWebPortals().subscribe(res => {
    //   console.log(res)
    // })

    // this.webPortalService.getListName('Pornhub').subscribe(res => {
    //   console.log(res)
    // })
  }

}
