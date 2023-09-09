import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Initialize users as an empty array

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}











// import { Component } from '@angular/core';
// import { UserService } from '../service/user.service';// Import the UserService
//
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent {
//   users: any[] = []; // Initialize users as an empty array
//
//   constructor(private userService: UserService) {} // Inject the UserService
//
//   getUser() {
//     this.userService.getUsers().subscribe(() => {
//       // Handle success or navigation here
//     });
//
//   }
// }
