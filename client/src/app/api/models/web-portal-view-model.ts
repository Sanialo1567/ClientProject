/* tslint:disable */
import { PostViewModel } from './post-view-model';
import { UserViewModel } from './user-view-model';
export interface WebPortalViewModel {
  cathegoryId?: string;
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string;
  posts?: Array<PostViewModel>;
  users?: Array<UserViewModel>;
}
