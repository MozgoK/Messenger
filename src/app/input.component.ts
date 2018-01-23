import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/map';

export class User {
  constructor(public name: string, public age: number) { }
}

@Component({
  selector: 'input-comp',
  templateUrl: 'input.component.html'
})
export class InputComponent {

  // private privet_aha = 'Хай';
  // title = 'app';
  // email: string;
  // url: string = 'assets/users.json';
  // users: User[] = [];

  // @ViewChild('email2') email2: NgModel;

  // constructor(private httpClient: HttpClient) { }

  // log(e = 1) {
  //   console.log(this.email2.valid);
  // }

  // clickFunc() {
  //   // this.httpClient.get(`${this.url}`).subscribe((data) => {this.users = data['userList']; console.log(data); });
  //   this.getUsers().subscribe((data) => { this.users = data; console.log(data); });
  // }

  // getUsers(): Observable<User[]> {
  //   return this.httpClient.get(`${this.url}`).map(data => {
  //     const userList = data['userList'];
  //     return userList.map(user => {
  //       return { name: user.name, age: user.age };
  //     });
  //   });
  // }
}