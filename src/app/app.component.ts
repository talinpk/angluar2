import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angluar2';
  users = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Doe', email: 'jane@example.com'},
    {id: 3, name: 'Bob Smith', email: 'bob@example.com'}
  ];
  constructor() { }

  addUser(user) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  updateUser(user) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
  }

  deleteUser(id) {
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
  }
}



