import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CathegoryService } from 'src/app/api/services';
import { Cathegory } from 'src/app/model/cathegory';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup | undefined;

  @Input() categoryList?: Cathegory[];
  @Input() category?: Cathegory;

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
      id: [this.category?.id],
      name: [this.category?.name, Validators.required],
      description: [this.category?.description, [Validators.required, Validators.minLength(6)]],
    })

  }

  update() {
      this.cathegoryService.putApiCathegoriesId({id: this.categoryForm?.value.id, body: this.categoryForm?.value}).subscribe(res => {
        console.log(res)
        let cat = this.categoryList?.find(x => x.id === this.categoryForm?.value.id);
        if(cat) {
          cat.description = this.categoryForm?.value.description;
          cat.name = this.categoryForm?.value.name;
          this.toastr.info('Category successfully edited');
        }
      }) 
  }
}
