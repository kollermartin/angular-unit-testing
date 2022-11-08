import { UsersService } from './../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils-service/utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  message: string | undefined;

  constructor(private usersService: UsersService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;

      if (this.users.length === 0) {
        this.message = 'No users';
      } else if (this.users.length <= 2) {
        this.message = 'Few users';
      } else {
        this.message = 'So many users';
      }
    });
  }
}
