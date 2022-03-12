import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService, SubscriptionService, WebPortalService } from 'src/app/api/services';
import { AccountService } from 'src/app/api/services/account.service';
import { Portal } from 'src/app/model/portal';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Input() portal?: Portal;

  postForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder, 
    private accountService: AccountService, 
    private postService: PostService, 
    private subscriptionService: SubscriptionService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      text: ['', Validators.required],
    })

  }

  addPost() {
    let post = <Post> {
      name: this.postForm?.value.name,
      text: this.postForm?.value.text,
      webPortalId: this.portal?.id
    }
    this.postService.postApiPost(<any>post).subscribe(res => {
      post.id = <string><any>res;
      this.toastr.success('Successfully added!');
      post.createDate = new Date();
      this.portal?.posts?.push(post);
      this.postForm?.reset();
    })
  }

}
