import { Todo } from "../../entities/todo.entity";

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  save(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
}
