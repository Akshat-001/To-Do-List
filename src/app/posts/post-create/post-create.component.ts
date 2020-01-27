import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  Title=""
  Content=""
  @Output() postCreated=new EventEmitter();
  newPost="No Content"

  onAddPost()
  {
    const post={title: this.Title, content: this.Content};
    this.postCreated.emit(post);
  }
  ngOnInit() {
  }

}
