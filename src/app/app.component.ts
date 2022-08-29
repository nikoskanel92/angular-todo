import { Component, VERSION } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todos : Todo[] = [];
  newTodo:string;


  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert('Please enter Todo')
    }
  }
}
