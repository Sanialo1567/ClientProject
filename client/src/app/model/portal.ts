import { Cathegory } from "./cathegory";
import { Post } from "./post";
import { User } from "./user"; 

export interface Portal {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    cathegoryId: string;
    cathegories: Cathegory[];
    users: User[];
    posts: Post[];
}
