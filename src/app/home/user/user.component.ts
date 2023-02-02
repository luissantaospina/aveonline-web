import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./User";
import {Product} from "../product/Product";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | undefined
  displayedColumns: string[] = ['name', 'role', 'actions'];
  constructor(private userService: UserService) { }

  users: Array<User> = []

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(user => {
      this.user = user
    })
    this.getUsersList()
  }

  getUsersList(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  ngOnInit(): void {
    this.getUsersList()
  }
}
