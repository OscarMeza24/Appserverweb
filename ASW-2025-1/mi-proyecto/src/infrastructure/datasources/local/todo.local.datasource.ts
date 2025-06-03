import { TodoDataSource } from "../../../domain/interfaces/datasources/todo.datasource.interface";
import { Todo } from "../../../domain/entities/todo.entity";
import { CreateTodoDTO } from "../../../application/use-cases/todo/create/create-todo.dto";

export class TodoLocalDataSource implements TodoDataSource {
  private todos: Todo[] = [];

  async getAll(): Promise<Todo[]> {
    return this.todos;
  }

  async getById(id: string): Promise<Todo | null> {
    return this.todos.find((todo) => todo.id === id) || null;
  }

  async create(todo: CreateTodoDTO): Promise<Todo> {
    const newTodo: Todo = {
      id: this.generateId(),
      title: todo.title,
      description: todo.description, // Add description property
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  async delete(id: string): Promise<void> {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  private generateId(): string {
    return (Math.random() * 100000).toString(36).substring(0, 9);
  }
}
