import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  _users: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const {users} = this.route.snapshot.data;
    this._users = users;
  }

}
