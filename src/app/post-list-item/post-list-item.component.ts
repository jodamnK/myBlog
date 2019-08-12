import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


   lastUpdate = new Date();


@Input() title: string;
@Input() content: string;
@Input() like: number;
@Input() created_at: Date;



  constructor() {

  }

  ngOnInit() {
  }


  onLike() {
    this.like++;
    console.log(this.like);
  }
  onDislike() {
    this.like--;
  }


}
