import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface User {
  name: string,
  username: string,
  email: string,
}

export interface Todo1 {
  // id: number,
  userId: number,
  completed: boolean,
  title: string,
}

export const userId = 2234;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient
  ) {

  }

  addUser() {
    this.http.post<User>('https://mate.academy/students-api/users', {
      name: "Artem Bolshak",
      username: "Artem4576",
      email: "fcdnipro20152705@gmail.com"
    }).subscribe((user) => {
      console.log('User: ', user);
    })
  }

  postTodo() {
    this.http.post<Todo1>('https://mate.academy/students-api/todos', {
      userId: userId,
      title: 'Artem Bolshak',
      completed: false
    }).subscribe(todo => {
      console.log('Todo: ', todo);
    })
  }

  getTodos() {
    this.http.get<Todo1[]>(`https://mate.academy/students-api/todos?userId=${userId}`)
      .subscribe(todos => {
        console.log('Todos: ', todos);
      })
  }

  deleteUser() {
    this.http.delete<User>('https://mate.academy/students-api/users/2236')
      .subscribe(todo => {
        console.log('Todo: ', todo);
      })
  }
}
