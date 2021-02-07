import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = "";

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: false
      }
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.openSnackBar("Item deleted", "Dismiss");
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
