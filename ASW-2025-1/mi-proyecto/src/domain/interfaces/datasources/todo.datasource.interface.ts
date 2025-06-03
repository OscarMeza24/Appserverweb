import { Todo } from "../../entities/todo.entity";
import { CreateTodoDTO } from "../../../application/use-cases/todo/create/create-todo.dto";

export interface TodoDataSource {
  getAll(): Promise<Todo[]>;
  getById(id: string): Promise<Todo | null>;
  create(todo: CreateTodoDTO): Promise<Todo>;
  delete(id: string): Promise<void>;
}
