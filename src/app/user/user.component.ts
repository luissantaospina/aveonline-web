import { Component, OnInit } from '@angular/core';
import { UserService } from "../user/user.service";
import { User } from  "../user/User"
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: Array<User> = []

  getUsersList(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  ngOnInit(): void {
    this.getUsersList()
  }
}
