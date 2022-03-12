import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CathegoryService } from 'src/app/api/services';
import { Cathegory } from 'src/app/model/cathegory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup | undefined;

  @Input() categoryList?: Cathegory[];

  constructor(
    private fb: FormBuilder,
    private routher: Router,
    private toastr: ToastrService,
    private cathegoryService: CathegoryService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  add() {
    this.cathegoryService.postApiCathegories(this.categoryForm?.value).subscribe(res => {
      let categoryId = <Cathegory><any>res;
      
      if(categoryId) {
        this.toastr.info('Category successfully added');
        if(this.categoryList) {
          let category = this.categoryForm?.value;
          category.id  = categoryId;
          this.categoryList.push(category)
        }
        this.categoryForm?.reset();
      }
    })
  }
}
