import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CathegoryService } from 'src/app/api/services';
import { Cathegory } from 'src/app/model/cathegory';

@Component({
  selector: 'app-cathegory-list',
  templateUrl: './cathegory-list.component.html',
  styleUrls: ['./cathegory-list.component.css']
})
export class CathegoryListComponent implements OnInit {
  cathegories?: Cathegory[];
  selectedCathegory?: Cathegory;

  addCategoryMode = false;
  editCategoryMode = false;
  addPortalMode = false;

  constructor(
      private categoryService: CathegoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getApiCathegories().subscribe(res => {
      this.cathegories = <Cathegory[]><any>res;
    })
  }

  cathegoryClick(cathegory: Cathegory) {
    this.selectedCathegory = cathegory;
  }

  editCategory(cathegory: Cathegory) {
    this.editCategoryMode = false;
    setTimeout(() => {
      this.selectedCathegory = cathegory;
      this.editCategoryMode = true;
    }, 100)
    
  }
}
