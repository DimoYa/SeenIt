import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from '../../shared/models/Post-info';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  [x: string]: any;

  @Input() post : PostInfo;
  
  constructor(private postService:PostService) { }

  isAuthor(post: PostInfo) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }

}
