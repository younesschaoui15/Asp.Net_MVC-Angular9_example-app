import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  _post: any;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const {post} = this.route.snapshot.data;
    this._post = post;
    // this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe((data: any) => this._post = data);
  }

}
